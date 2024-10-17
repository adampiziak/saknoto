import type StockfishWeb from "lila-stockfish-web";
// import Stockfish from "./sf161-70";
import Stockfish from "./sf16-7";
import {
  startingFen,
  parse_moves,
  debounce,
  debounce_instant,
  throttle,
} from "./utils";
import { parse_info } from "./uci";
import { STARTING_EVAL, STARTING_FEN } from "./constants";
import { LRUCache } from "./data/Cache";

export interface Evaluation {
  fen: string;
  depth: number;
  mode: EvaluationType;
  cached: boolean;
  lines: EvaluationLine[];
}

export interface EvaluationLine {
  score: number;
  san: string[];
  lan: string[];
}

interface Task {
  fen: string;
  origin: TaskOrigin;
  config: TaskConfig;
}

interface TaskConfig {
  useCache: boolean;
  useCloud: boolean;
}

export function createEmptyEvaluation(fen: string | null = null): Evaluation {
  return {
    fen: fen ?? startingFen(),
    depth: 0,
    mode: EvaluationType.LOCAL,
    cached: false,
    lines: [],
  };
}

const EVAL_DEPTH = 28;

export enum EvaluationType {
  LOCAL = "local",
  CLOUD = "cloud",
}

export enum TaskOrigin {
  BOARD,
  SECONDARY,
}

export enum EngineMode {
  STARTUP,
  READY,
  WORKING,
  STOPPING,
}

const devmode = false;
export class Engine {
  subscribers = new Map<string, any[]>();
  engine: StockfishWeb | undefined;
  last_cloud_request = new Date(0);
  uci_ready = false;

  mode: EngineMode = EngineMode.STARTUP;
  engine_ready = true;
  initialize_wait_queue: any[] = [];
  cache?: LRUCache<Evaluation>;
  current_position = startingFen();

  // Position that engine is currently working on.
  currentTask: Task | null = null;

  // Queue for evaluation requests from board and other.
  boardQueue: Task[] = [];
  secondaryQueue: Task[] = [];

  // Evaluation for main board position.
  boardEvaluation: Evaluation = createEmptyEvaluation();

  // Current evaluation from any secondary requests.
  secondaryEvaluation = createEmptyEvaluation();

  private sharedWasmMemory = (lo: number, hi = 32767): WebAssembly.Memory => {
    let shrink = 4; // 32767 -> 24576 -> 16384 -> 12288 -> 8192 -> 6144 -> etc
    while (true) {
      try {
        return new WebAssembly.Memory({
          shared: true,
          initial: lo,
          maximum: hi,
        });
      } catch (e) {
        if (hi <= lo || !(e instanceof RangeError)) throw e;
        hi = Math.max(lo, Math.ceil(hi - hi / shrink));
        shrink = shrink === 4 ? 3 : 4;
      }
    }
  };
  async start() {
    this.debugMessage("LOADING ENGINE");
    const sf = await Stockfish({
      wasmMemmory: this.sharedWasmMemory(4096!),
      locateFile: (name: string) => `/${name}`,
    });

    const nnue_paths: Set<string> = new Set([]);
    for (let i = 0; i < 20; i++) {
      const nnue_path = sf.getRecommendedNnue(i);

      if (nnue_paths.has(nnue_path)) {
        break;
      }
      nnue_paths.add(nnue_path);

      const response = await fetch(`/${nnue_path}`);
      const buffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      try {
        await sf.setNnueBuffer(uint8Array, i);
      } catch (e) {
        console.error(nnue_path);
        console.error(e);
      }
    }

    this.engine = sf;

    try {
      if (this.engine) {
        this.engine.listen = (event: any) => {
          this.handleMessage(event);
        };

        this.engine.onError = (e: any) => {
          console.error(e);
        };
        this.engine.uci("uci");
      } else {
        console.error("ENGINE UNDEFINED");
      }
    } catch (e) {
      console.error(e);
    }

    // Cache
    this.debugMessage("ENGINE READY");
    this.cache = new LRUCache<Evaluation>("engine-cache");
    await this.cache.load();
    this.setBoardPosition(startingFen());
  }

  wait() {
    return new Promise<void>((resolve, _reject) => {
      if (this.uci_ready) {
        resolve();
      } else {
        this.initialize_wait_queue.push(resolve);
      }
    });
  }

  async evaluateNextTask() {
    // Get lastest board position update.
    let task = null;
    while (this.boardQueue.length > 0) {
      task = this.boardQueue.pop();
    }

    // If no board update, try secondary queue.
    if (!task) {
      task = this.secondaryQueue.pop();
    }

    this.currentTask = task ?? null;

    if (this.currentTask) {
      this.mode = EngineMode.WORKING;
      const evaluation = createEmptyEvaluation(this.currentTask.fen);
      if (this.currentTask.origin === TaskOrigin.BOARD) {
        this.boardEvaluation = evaluation;
      } else {
        this.secondaryEvaluation = evaluation;
      }
      this.evaluateTask(this.currentTask);
    }
  }

  async clear_cache() {
    this.cache?.clear();
  }

  sendIsReady() {
    setTimeout(() => {
      this.engine?.uci("isready");
    }, 100);
  }

  debugMessage(msg: string) {
    if (devmode) {
      console.log(msg);
    }
  }

  async handleMessage(message: string) {
    // console.log(EngineMode[this.mode]);
    // Engine has loaded successfully.
    if (message.includes("uciok")) {
      this.engine?.uci("setoption name Threads value 2");
      this.engine?.uci("setoption name Hash value 1536");
      this.engine?.uci("setoption name MultiPV value 3");
      this.engine?.uci("ucinewgame");

      for (const resolver of this.initialize_wait_queue) {
        resolver();
      }

      this.mode = EngineMode.READY;
      this.sendIsReady();
      this.debugMessage("engine loaded.");
      return;
    }

    // Don't do anything until engine has loaded.
    if (this.mode === EngineMode.STARTUP) {
      this.debugMessage("waiting until ready.");
      return;
    }

    // Engine has finished searching after `stop` command.
    if (
      this.mode === EngineMode.STOPPING &&
      (message.includes("ponder") || message.includes("bestmove"))
    ) {
      this.debugMessage("stopped successfully.");
      this.currentTask = null;
      this.mode = EngineMode.READY;
      setTimeout(() => {
        this.sendIsReady();
      }, 500);
      return;
    }

    // Engine is ready, check for evaluation requests.
    if (message.includes("readyok")) {
      this.debugMessage("engine ready for next task");
      this.mode = EngineMode.READY;
      return await this.evaluateNextTask();
    }

    // Engine has finished searching.
    if (message.includes("ponder") || message.includes("bestmove")) {
      this.debugMessage("engine done with task.");
      if (this.currentTask?.origin === TaskOrigin.SECONDARY) {
        this.emitSecondaryEvaluation({ ...this.secondaryEvaluation });
        this.cache?.add(this.secondaryEvaluation.fen, {
          ...this.secondaryEvaluation,
          cached: true,
        });
      } else {
        this.emitBoardEvaluation();
        this.cache?.add(this.boardEvaluation.fen, {
          ...this.boardEvaluation,
          cached: true,
        });
      }
      this.currentTask = null;
      this.engine_ready = true;
      this.sendIsReady();
      return;
    }

    if (this.mode === EngineMode.WORKING) {
      // Parse info
      try {
        const info = parse_info(message);
        if (info) {
          if (this.currentTask?.origin === TaskOrigin.BOARD) {
            this.boardEvaluation.mode = EvaluationType.LOCAL;
            this.boardEvaluation.depth = Math.max(
              this.boardEvaluation.depth,
              info.depth,
            );
            const line = parse_moves(this.boardEvaluation.fen, info.line);
            this.boardEvaluation.lines[info.multipv - 1] = {
              score: Math.round(info.cp / 10) / 10,
              san: line,
              lan: info.line,
            };
            this.emitBoardEvaluation();
          } else {
            this.secondaryEvaluation.depth = Math.max(
              this.secondaryEvaluation.depth,
              info.depth,
            );
            const line = parse_moves(this.secondaryEvaluation.fen, info.line);
            this.secondaryEvaluation.lines[info.multipv - 1] = {
              score: Math.round(info.cp / 10) / 10,
              san: line,
              lan: info.line,
            };
            this.emitSecondaryEvaluation({ ...this.secondaryEvaluation });
          }
        }
      } catch (_) {
        return;
      }
    }
  }

  emitBoardEvaluation = throttle(() => {
    const evaluation = { ...this.boardEvaluation };
    const listeners = this.subscribers.get("board");
    if (!listeners) {
      return;
    }

    for (const callback of listeners) {
      callback(evaluation);
    }
  }, 300);

  getEvaluation() {
    return { ...this.boardEvaluation };
  }

  emitSecondaryEvaluation(evaluation: Evaluation) {
    const listeners = this.subscribers.get(evaluation.fen);

    if (!listeners) {
      return;
    }

    for (const callback of listeners) {
      callback(evaluation);
    }
  }

  enqueue_other = debounce((fen: string) => {
    this.prepareTask({
      origin: TaskOrigin.SECONDARY,
      fen,
      config: { useCache: true, useCloud: true },
    });
  }, 50);

  // Enqueue task and notify engine.
  prepareTask(task: Task) {
    // Put task in queue.
    if (task.origin === TaskOrigin.BOARD) {
      this.boardQueue.push(task);
    } else {
      this.secondaryQueue.push(task);
    }

    // Allow engine to load.
    if (this.mode === EngineMode.STARTUP) {
      return;
    }

    // Board has new position. Stop evaluation of old position.
    if (
      this.currentTask?.origin === TaskOrigin.BOARD &&
      this.mode === EngineMode.WORKING
    ) {
      this.debugMessage("stopping engine");
      this.engine?.uci("stop");
      this.mode = EngineMode.STOPPING;
      return;
    }

    // If engine is idle, send `isready` which will trigger eval of next task.
    if (this.mode === EngineMode.READY) {
      this.sendIsReady();
    }
  }

  setBoardPosition = debounce_instant((fen: string) => {
    this.debugMessage("BOARD IS: " + fen);
    if (fen === STARTING_FEN) {
      this.boardEvaluation = STARTING_EVAL;
      this.emitBoardEvaluation();
      return;
    }

    this.prepareTask({
      fen,
      origin: TaskOrigin.BOARD,
      config: {
        useCache: true,
        useCloud: true,
      },
    });
  }, 1000);

  // subscribe to board evaluation updates.
  onBoardEvaluation(callback: (arg0: Evaluation) => void) {
    const existing = this.subscribers.get("board") ?? [];
    existing.push(callback);
    this.subscribers.set("board", existing);
    setTimeout(() => {
      this.emitBoardEvaluation();
    });
  }

  // subscribe to exact position updates.
  onPositionEvaluation(fen: string, callback: (arg0: Evaluation) => void) {
    const existing = this.subscribers.get(fen) ?? [];
    existing.push(callback);
    this.subscribers.set(fen, existing);
  }

  wait_for(fen: string): Promise<Evaluation> {
    return new Promise((resolve, _) => {
      this.onPositionEvaluation(fen, (evaluation: Evaluation) => {
        resolve(evaluation);
      });

      this.enqueue_other(fen);
    });
  }

  // Evaluate position. Invoked when engine dequeues task after `isready` message.
  async evaluateTask(task: Task) {
    console.log("evaluating...: " + task.fen);

    // Try cache
    if (task.config.useCache) {
      const saved = await this.cache?.get(task.fen);
      if (saved) {
        if (task.origin === TaskOrigin.BOARD) {
          this.boardEvaluation = saved;
          this.emitBoardEvaluation();
        } else {
          this.emitSecondaryEvaluation(saved);
        }
        this.currentTask = null;
        this.engine_ready = true;
        this.debugMessage("done (cached).");
        this.sendIsReady();
        return;
      }
    }
    // Try Lichess cloud
    if (task.config.useCloud) {
      // call lichess api
      const cloud_eval = await this.cloud_evaluation(task);

      // if found emit
      if (cloud_eval) {
        this.cache?.add(cloud_eval.fen, { ...cloud_eval, cached: true });
        if (task.origin === TaskOrigin.BOARD) {
          this.boardEvaluation = cloud_eval;
          this.emitBoardEvaluation();
        } else {
          this.emitSecondaryEvaluation(cloud_eval);
        }

        // if depth is below target, do local eval as well.
        if (cloud_eval.depth >= EVAL_DEPTH) {
          this.currentTask = null;
          this.engine_ready = true;
          this.debugMessage("done (cloud).");
          this.sendIsReady();
          return;
        }
        console.log("CLOUD DEPTH TOO LOW");
      }
    }

    // local
    this.startLocalEvaluation(task);
  }

  startLocalEvaluation(task: Task) {
    this.boardEvaluation.depth = 1;
    this.debugMessage("starting local eval: " + task.fen);
    this.engine?.uci(`position fen ${task.fen}`);
    this.engine?.uci(`go depth ${EVAL_DEPTH}`);
  }

  async cloud_evaluation(task: Task) {
    try {
      let query = `https://lichess.org/api/cloud-eval?fen=${encodeURIComponent(task.fen)}&multiPv=3`;

      const elapsed_time = Date.now() - this.last_cloud_request.getTime();

      if (elapsed_time < 500) {
        return null;
      }

      const response = await fetch(query);
      const json = await response.json();

      if (!json?.pvs) {
        return null;
      }

      let evaluation = createEmptyEvaluation();
      evaluation.depth = json.depth ?? 0;
      evaluation.fen = json.fen;
      evaluation.mode = "cloud";

      for (const line of json.pvs.slice(0, 3)) {
        let moves = line.moves.split(" ");
        evaluation.lines.push({
          score: Math.round(line.cp / 10) / 10,
          lan: moves,
          san: parse_moves(evaluation.fen, moves),
        });
      }

      return evaluation;
    } catch {
      return null;
    }
  }
}
