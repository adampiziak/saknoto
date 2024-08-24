import { make_valid, startingFen, toDests } from "./utils";
import { Api } from "chessground/api";
import { Chessground } from "chessground";
import { Chess } from "chess.js";
import { LRUCache } from "./data/Cache";
import { ChessColor } from "./lib/common";

interface History {
  index: number;
  moves: string[];
}

enum PlayerKind {
  Computer,
  Human,
}

interface Side {
  white: PlayerKind;
  black: PlayerKind;
}

export class Game {
  state: Chess;
  api: Api | null = null;
  starting_position;
  history: History;
  orientation: ChessColor;
  playOpponent: boolean = false;
  side: Side;
  cache?: LRUCache<any>;
  listeners: any[] = [];
  once_listeners: any[] = [];

  set_opponent(val: boolean) {
    this.playOpponent = val;
    this.checkIfComputerMove();
  }

  constructor() {
    this.state = new Chess();
    this.starting_position = startingFen();
    this.orientation = ChessColor.White;
    this.side = {
      white: PlayerKind.Human,
      black: PlayerKind.Human,
    };

    this.history = {
      index: 0,
      moves: [],
    };
  }

  checkIfComputerMove() {
    setTimeout(() => {
      if (this.turncolor() !== this.orientation && this.playOpponent) {
        this.play_common_move();
      }
    }, 800);
  }

  attach(element: HTMLElement) {
    this.api = Chessground(element, {});
    this.cache = new LRUCache("computer-move");
    this.cache.load();
    const self = this;
    this.api.set({
      movable: {
        events: {
          after(orig, dest) {
            self.handle_move(`${orig}${dest}`);
          },
        },
      },
    });

    this.update_board();

    // listen for key events
    addEventListener("keydown", (ev: KeyboardEvent) => {
      if (ev.key === "ArrowLeft") {
        this.undoMove();
      }

      if (ev.key === "ArrowRight") {
        console.log("REDO");
        this.redoMove();
      }
    });
    this.checkIfComputerMove();
  }

  setStartingPosition(pgn: string) {
    this.state.loadPgn(pgn);
    this.starting_position = this.state.fen();
    this.update_board();
  }

  undoMove() {
    const moves = this.history.moves.slice(
      0,
      Math.max(this.history.index - 1, 0),
    );
    this.state.reset();
    for (const m of moves) {
      this.state.move(m);
    }
    this.history.index = Math.max(0, this.history.index - 1);
    this.update_board();
    this.emit();
  }

  redoMove() {
    const moves = this.history.moves.slice(0, this.history.index + 1);
    this.state.reset();
    for (const m of moves) {
      this.state.move(m);
    }
    this.history.index = Math.min(
      this.history.moves.length,
      this.history.index + 1,
    );
    this.update_board();
    this.emit();
  }

  restart() {
    this.state.reset();
    this.state.load(this.starting_position);
    this.history.index = 0;
    this.history.moves = [];
    this.update_board();
    this.api?.set({
      lastMove: undefined,
    });
    this.checkIfComputerMove();
  }

  subscribe(callback: any) {
    this.listeners.push(callback);
  }

  get_next(callback: any) {
    this.once_listeners.push(callback);
  }

  emit() {
    const fen = this.state.fen();
    const history = this.history.moves.slice(0, this.history.index);
    for (const callback of this.listeners) {
      callback({ fen, history });
    }
    for (const callback of this.once_listeners) {
      callback({ fen, history });
    }
    this.once_listeners = [];
  }

  set_player_type(color: ChessColor, player_type: PlayerKind) {
    this.side[color] = player_type;
  }

  set_orientation(color: ChessColor) {
    this.orientation = color;
    this.update_board();
    this.checkIfComputerMove();
  }

  toggle_orientation() {
    this.orientation =
      this.orientation === ChessColor.White
        ? ChessColor.Black
        : ChessColor.White;
    this.update_board();
  }

  handle_move(move: string) {
    this.state.move(move);
    this.history.moves = this.state.history();
    this.history.index = this.history.moves.length;
    this.update_board();

    this.checkIfComputerMove();
  }

  async play_common_move() {
    const url =
      "https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz&ratings=2000,2400&fen=" +
      encodeURIComponent(this.state.fen());

    const key = this.state.fen();

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

        this.play_move(validMove);
      }
    };

    if (cached === undefined) {
      fetch(url).then((res) => {
        const c = this.cache;
        console.log("FETCHING...");
        res.json().then(async (body) => {
          const count = await c?.count();
          if (!body.moves) {
            return;
          }
          await c?.add(this.state.fen(), body);
          console.log(count);
          console.log(body);
          play_move(body);
        });
      });
    } else {
      console.log("CACHED------------");
      console.log(cached);
      if (!cached.moves) {
        this.cache?.remove(key);
      }
      play_move(cached);
    }
  }

  play_move(move: string) {
    this.state.move(move);
    this.history.moves = this.state.history();
    this.history.index = this.history.moves.length;
    this.update_board();
  }

  turncolor(): ChessColor {
    return this.state.turn() === "w" ? ChessColor.White : ChessColor.Black;
  }

  update_board() {
    const color = this.state.turn() === "w" ? "white" : "black";
    this.api?.set({
      fen: this.state.fen(),
      turnColor: color,
      orientation: this.orientation,
      movable: {
        color,
        free: false,
        dests: toDests(this.state),
      },
    });
    this.emit();
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
