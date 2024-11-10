import {
  debounce,
  debounce_instant,
  make_valid,
  parse_move,
  san_to_lan,
  startingFen,
  throttle,
  chessMoveThrottle,
  toDests,
} from "./utils";
import { Api } from "chessground/api";
import { Chessground } from "chessground";
import { Chess } from "chess.js";
import { LRUCache } from "./data/Cache";
import { ChessColor } from "./lib/common";
import { DrawShape } from "chessground/draw";
import { SaknotoContextKind } from "./Context";
import { SubscriberManager } from "./lib/SubscriberManager";

interface History {
  index: number;
  moves: string[];
}

interface GameEvent {
  fen: string;
  history: string[];
  pendingMove: PositionMove | null;
}

interface Turn {
  color: ChessColor;
  side: Side;
}

enum Side {
  Player,
  Opponent,
}

export interface GameState {
  player: Player;
  opponent: Player;
  orientation: ChessColor;
  autoplayRepertoire: boolean;
  startingFen: string;
  useNextMoveAsRep: boolean;
  confirmRepMove: boolean;
  notifyEngine: boolean;
}

export interface Player {
  color: ChessColor;
  kind: PlayerKind;
}

export enum PlayerKind {
  None,
  Lichess,
}

export type PlayerKindKey = keyof typeof PlayerKind;

export const defaultGameState = (): GameState => {
  return {
    player: {
      color: ChessColor.White,
      kind: PlayerKind.Human,
    },
    opponent: {
      color: ChessColor.Black,
      kind: PlayerKind.None,
    },
    orientation: ChessColor.White,
    autoplayRepertoire: false,
    startingFen: startingFen(),
    useNextMoveAsRep: false,
    confirmRepMove: false,
    notifyEngine: false,
  };
};

let gameinstances = 0;

export interface PositionMove {
  fen: string;
  move: string;
}

export type UnSubKind = (() => void) | undefined;

export class Game {
  chess: Chess;
  api: Api | null = null;
  appContext: SaknotoContextKind;
  history: History;
  state: GameState;
  cache?: LRUCache<any>;
  listeners: SubscriberNode[] = [];
  subManager: SubscriberManager<any>;
  once_listeners: any[] = [];
  state_listener: any[] = [];
  boardRef: HTMLElement | undefined;
  gameId: string | null = null;
  gid: number;
  lastApiRequest = new Date(0);
  requestInProgress = false;
  moveListeners: SubscriberManager;
  active: boolean;
  pendingRepMove: PositionMove | null = null;

  constructor(context: SaknotoContextKind, key: string | null = null) {
    this.chess = new Chess();
    this.state = defaultGameState();
    this.appContext = context;
    this.gameId = key;
    this.gid = gameinstances;
    gameinstances += 1;
    this.active = true;
    this.subManager = new SubscriberManager();
    this.moveListeners = new SubscriberManager();

    this.history = {
      index: 0,
      moves: [],
    };
  }

  cleanup() {
    this.active = false;
  }

  setGameId(id: string) {
    this.gameId = id;
    this.loadState();
  }

  setRepertoireAutoPlay(val: boolean) {
    this.updateState((state) => {
      state.autoplayRepertoire = val;
    });
  }

  saveState() {
    if (window && this.gameId !== null) {
      const key = `game-state-${this.gameId}`;
      window.localStorage.setItem(key, JSON.stringify(this.state));
    }
  }

  loadState() {
    if (window && this.gameId !== null) {
      const key = `game-state-${this.gameId}`;
      const saved = window.localStorage.getItem(key);
      if (saved) {
        this.state = JSON.parse(saved);
        this.api.set({
          orientation: this.state.orientation,
        });
        setTimeout(() => {
          this.updateState(() => {});
        }, 500);
        // this.restartSlow();
      }
    }
  }

  checkIfComputerMove = chessMoveThrottle(() => {
    const fen = this.chess.fen();
    const turn = this.getTurn();

    if (
      turn.side === Side.Opponent &&
      this.state.opponent.kind === PlayerKind.Lichess
    ) {
      this.playCommonMove();
      return;
    }

    if (turn.side === Side.Player && this.state.autoplayRepertoire) {
      this.appContext.repertoire.get(fen).then((result) => {
        if (result) {
          const move = result.response.at(0);
          if (move) {
            this.playMove(move);
          }
        }
      });
    }
  }, 400);

  reset() {
    this.chess.reset();
    this.state = defaultGameState();
    this.chess = new Chess();
    this.history = {
      index: 0,
      moves: [],
    };
  }

  useEngine(val: boolean) {
    this.state.notifyEngine = val;
  }

  detachAll() {
    this.boardRef = undefined;
    this.reset();
  }

  attach(element: HTMLElement, gameId: string | undefined = undefined) {
    this.boardRef = element;
    this.api = Chessground(element, {});
    this.cache = new LRUCache("computer-move");
    this.cache.load();
    if (gameId) {
      this.gameId = gameId;
    }
    this.appContext.repertoire.load();
    const self = this;
    this.api.set({
      movable: {
        events: {
          after(orig, dest) {
            self.handleMove(`${orig}${dest}`);
          },
        },
      },
    });

    this.updateBoard();

    // listen for key events
    // this.boardRef.addEventListener("keydown", (ev: KeyboardEvent) => {
    //   if (ev.key === "ArrowLeft") {
    //     this.undoMove();
    //   }

    //   if (ev.key === "ArrowRight") {
    //     this.redoMove();
    //   }
    // });
    this.loadState();
    // this.checkIfComputerMove();
    this.emitState();
    if (this.state.useNextMoveAsRep) {
      this.setRepertoireMode();
    } else {
      this.unsetRepertoireMode();
    }
  }

  clearArrows() {
    this.api?.set({
      drawable: {
        autoShapes: [],
      },
    });
  }

  drawArrowsFen(fen: string, moves: string[]) {
    let arrows: DrawShape[] = [];
    try {
      for (const m of moves) {
        const { orig, dest } = san_to_lan(fen, m);
        arrows.push({
          orig,
          dest,
          brush: "blue",
        });
      }
    } catch (e) {
      console.log(e);
      arrows = [];
    }
    this.api?.set({
      drawable: {
        autoShapes: arrows,
      },
    });
  }

  drawArrows(moves: string[]) {
    let arrows: DrawShape[] = [];
    try {
      for (const m of moves) {
        const { orig, dest } = san_to_lan(this.chess.fen(), m);
        arrows.push({
          orig,
          dest,
          brush: "blue",
        });
      }
    } catch (e) {
      arrows = [];
    }
    this.api?.set({
      drawable: {
        autoShapes: arrows,
      },
    });
  }

  setStartingPosition(pgn: string) {
    this.chess.loadPgn(pgn);
    this.state.startingFen = this.chess.fen();
    this.updateBoard();
  }

  undoMove() {
    const moves = this.history.moves.slice(
      0,
      Math.max(this.history.index - 1, 0),
    );
    this.chess.reset();
    for (const m of moves) {
      this.chess.move(m);
    }
    this.history.index = Math.max(0, this.history.index - 1);
    this.tryNotifyEngine();
    this.updateBoard();
    this.emit();
  }

  redoMove() {
    const moves = this.history.moves.slice(0, this.history.index + 1);
    this.chess.reset();
    for (const m of moves) {
      this.chess.move(m);
    }
    this.history.index = Math.min(
      this.history.moves.length,
      this.history.index + 1,
    );
    this.tryNotifyEngine();
    this.updateBoard();
    this.emit();
  }

  restartSlow() {
    this.chess.reset();
    this.chess.load(this.state.startingFen);
    this.api?.set({
      fen: this.state.startingFen,
    });
    this.tryNotifyEngine();
    setTimeout(() => {
      this.restart();
    }, 600);
  }

  restart() {
    this.chess.reset();
    this.chess.load(this.state.startingFen);
    this.history.index = 0;
    this.history.moves = [];
    this.updateBoard();
    this.api?.set({
      lastMove: undefined,
    });
    this.tryNotifyEngine();
    setTimeout(() => {
      this.checkIfComputerMove();
    }, 200);
  }

  subscribe(callback: (event: GameEvent) => void) {
    const unsub = this.subManager.on(callback);
    setTimeout(() => {
      this.emit();
    }, 100);

    return unsub;
  }

  onMove(callback: (san: string) => any) {
    const unsub = this.moveListeners.on(callback);
    setTimeout(() => {
      this.emit();
    }, 100);

    return unsub;
  }

  setRepertoireMode() {
    this.state.useNextMoveAsRep = true;
    if (this.boardRef) {
      this.boardRef.classList.add("repertoire-board-mode");
    }
  }

  confirmPendingRepMove() {
    if (this.pendingRepMove) {
      this.appContext.repertoire.add(
        this.pendingRepMove.fen,
        this.pendingRepMove.move,
      );
      this.pendingRepMove = null;
      this.emit();
    }
  }

  setConfirmRep() {
    this.state.confirmRepMove = true;
  }
  unsetConfirmRep() {
    this.state.confirmRepMove = false;
  }

  unsetRepertoireMode() {
    this.state.useNextMoveAsRep = false;
    if (this.boardRef) {
      this.boardRef.classList.remove("repertoire-board-mode");
    }
  }

  toggleRepertoireMode() {
    console.log("TOGGGLE");
    if (this.state.useNextMoveAsRep) {
      this.unsetRepertoireMode();
    } else {
      this.setRepertoireMode();
    }
  }

  get_next(callback: any) {
    this.once_listeners.push(callback);
  }

  loadPosition(fen: string, syncOrientation = false) {
    // console.log("loading...");
    try {
      this.chess.load(fen);
      if (syncOrientation) {
        this.state.orientation = this.getTurn().color;
      }
      this.updateBoard();
    } catch {
      this.restart();
    }
  }

  emit() {
    const fen = this.chess.fen();
    const history = this.history.moves.slice(0, this.history.index);
    this.subManager.emit({ fen, history, pendingMove: this.pendingRepMove });
    // this.subManager.
    // for (const callback of this.subManager.all()) {
    //   callback({
    //     fen,
    //     history,
    //     pendingMove: this.pendingRepMove,
    //   });
    // }
    // for (const callback of this.once_listeners) {
    //   callback({ fen, history });
    // }
    // this.once_listeners = [];
  }

  subscribeState(callback: any) {
    this.state_listener.push(callback);
    this.emitState();
  }

  updateState(modifier: (state: GameState) => void, update = false) {
    modifier(this.state);
    this.saveState();
    if (update) {
      this.emitState();
      setTimeout(() => {
        this.updateBoard();
        this.checkIfComputerMove();
      }, 500);
    }
  }

  emitState() {
    for (const callback of this.state_listener) {
      callback({ ...this.state });
    }
  }

  setPlayerColor(color: ChessColor) {
    const opponentColor =
      color === ChessColor.White ? ChessColor.Black : ChessColor.White;
    console.log("updated color");
    this.updateState((state) => {
      state.player.color = color;
      state.opponent.color = opponentColor;
    });
  }

  setOpponentType(kind: PlayerKind) {
    this.updateState((state) => {
      state.opponent.kind = kind;
    });
  }

  setOrientation(color: ChessColor) {
    this.updateState((state) => {
      state.orientation = color;
    }, true);
  }

  toggleOrientation() {
    this.state.orientation =
      this.state.orientation === ChessColor.White
        ? ChessColor.Black
        : ChessColor.White;
    this.updateBoard();
  }

  handleMove(move: string) {
    const fen = this.chess.fen();
    let san;
    try {
      san = parse_move(fen, move);
      if (!san) {
        return;
      }
    } catch (_) {
      return;
    }

    this.playMove(move);
  }

  emitMove(san: string) {
    for (const callback of this.moveListeners.all()) {
      callback(san);
    }
  }

  playCommonMove = async () => {
    if (this.requestInProgress) {
      return;
    }
    const url =
      "https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz&ratings=2000,2400&fen=" +
      encodeURIComponent(this.chess.fen());

    const key = this.chess.fen();

    let cached = undefined;
    try {
      cached = await this.cache?.get(key);
    } catch (e) {
      return;
    }

    const play_move = (body: any) => {
      let topMoves = body.moves;

      if (topMoves.length > 0) {
        const games = topMoves[0].white + topMoves[0].black + topMoves[0].draws;

        if (games < 100) {
          this.restart();
          return;
        }

        let nextMove = randomWeightedMove(topMoves);

        let validMove = make_valid(nextMove.uci);

        this.playMove(validMove);
      }
    };

    if (cached === undefined) {
      const now = Date.now();
      const diff = now - this.lastApiRequest;
      const remain = 2000 - diff;
      if (remain > 0) {
        this.requestInProgress = true;
        return setTimeout(
          () => {
            this.requestInProgress = false;
            this.playCommonMove();
          },
          Math.max(500, remain + 10),
        );
      }

      fetch(url).then((res) => {
        const c = this.cache;
        res.json().then(async (body) => {
          if (!body.moves) {
            return;
          }
          await c?.add(this.chess.fen(), body);
          play_move(body);
        });
      });
      this.lastApiRequest = now;
    } else {
      if (!cached.moves) {
        this.cache?.remove(key);
      }
      play_move(cached);
    }
  };

  playMove(move: string) {
    // validate move
    const fen = this.chess.fen();
    let san;
    try {
      san = parse_move(fen, move);
      if (!san) {
        return;
      }
    } catch (_) {
      return;
    }

    // check if move is for rep
    const turn = this.getTurn();
    if (turn.side === Side.Player && this.state.useNextMoveAsRep) {
      if (this.state.confirmRepMove) {
        this.pendingRepMove = {
          fen: this.chess.fen(),
          move: san,
        };
      } else {
        console.log("adding move to fen" + this.chess.fen());
        console.log(san);
        this.appContext.repertoire.add(this.chess.fen(), san);
      }
    }

    // make move
    this.chess.move(move);
    this.unsetRepertoireMode();
    // console.log(`move is ${move}: new fen is -> ${this.chess.fen()}`);
    this.tryNotifyEngine();
    this.history.moves = this.chess.history();
    this.history.index = this.history.moves.length;
    this.updateBoard();
    this.checkIfComputerMove();
    this.emitMove(san);
  }

  tryNotifyEngine() {
    if (!this.active) {
      return;
    }
    if (this.state.notifyEngine) {
      this.appContext.engine.setBoardPosition(this.chess.fen());
    }
  }

  notifyEngine() {
    this.appContext.engine.setBoardPosition(this.chess.fen());
  }

  getTurnColor(): ChessColor {
    return this.chess.turn() === "w" ? ChessColor.White : ChessColor.Black;
  }

  getTurn(): Turn {
    const color = this.getTurnColor();
    if (this.state.player.color === color) {
      return {
        color,
        side: Side.Player,
      };
    } else {
      return {
        color,
        side: Side.Opponent,
      };
    }
  }

  updateBoard() {
    this.clearArrows();
    const color = this.chess.turn() === "w" ? "white" : "black";
    this.api?.set({
      fen: this.chess.fen(),
      turnColor: color,
      orientation: this.state.orientation,
      movable: {
        color,
        free: false,
        dests: toDests(this.chess),
      },
    });
    this.state.useNextMoveAsRep = false;
    this.emit();
    setTimeout(() => {
      document.body.dispatchEvent(new Event("chessground.resize"));
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }
}

function randomWeightedMove(moves: any) {
  let weights: number[] = moves.map((x: any) => x.black + x.draws + x.white);

  let i;
  for (i = 1; i < weights.length; i++) weights[i] += weights[i - 1];
  var random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return moves[i];
}
