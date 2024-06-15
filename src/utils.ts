import { Chess, SQUARES } from "chess.js";

export const debounce = (callback: any, wait: any) => {
  let timeoutId: number | null | undefined = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export function toDests(chess) {
  const dests = new Map();
  SQUARES.forEach((s) => {
    const ms = chess.moves({ square: s, verbose: true });
    if (ms.length)
      dests.set(
        s,
        ms.map((m) => m.to),
      );
  });
  return dests;
}

export function drawArrows(api: Api, position: string, arrows: string[]) {
  return;
}

export function parse_moves(fen, moves) {
  const game = new Chess();

  game.load(fen);
  const moveCount = game.moveNumber();
  for (let move of moves) {
    const m = make_valid(move);
    game.move(m);
  }
  return game.history();
}

export function make_valid(move: string) {
  switch (move) {
    case "e8h8":
      return "e8g8";
    case "e8a8":
      return "e8c8";
    case "e1h1":
      return "e1g1";
    case "e1a1":
      return "e1c1";
    default:
      return move;
  }
}
