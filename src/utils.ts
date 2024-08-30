import { Chess, SQUARES } from "chess.js";
import * as cg from "chessground/types";

export function startingFen() {
  return new Chess().fen();
}

export const debounce = (callback: any, wait: any) => {
  let timeoutId: number | null | undefined = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export const validate_move = (fen: string, move: string) => {
  try {
    let game = new Chess();
    game.load(fen);
    game.move(move);
    return true;
  } catch {
    return false;
  }
};

export const debounce_async = (callback: any, wait: any) => {
  let timeoutId: number | null | undefined = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(async () => {
      await callback(...args);
    }, wait);
  };
};

export const colorScheme = () => {
  const root = document.getElementById("#saknoto");
  const scheme = root?.getAttribute("saknoto_mode");
  alert(scheme);

  return scheme;
};

// Run instantly if not run for a while
// Run at least every interval
// Always run the last invocation
export const throttle = (callback, delay) => {
  let timeoutId: any = null;
  let lastInvocation = new Date(0);
  let lastCompletion = new Date(0);

  return (...args: any) => {
    const time_since_invocation = new Date() - lastInvocation;
    const time_since_completion = new Date() - lastCompletion;
    lastInvocation = new Date();
    window.clearInterval(timeoutId);

    if (Math.max(time_since_invocation, time_since_completion) > delay) {
      callback(...args);
      lastCompletion = new Date();
    } else {
      timeoutId = window.setTimeout(() => {
        callback(...args);
        lastCompletion = new Date();
      }, delay);
    }
  };
};

export const getTurn = (fen: string) => {
  const game = new Chess();
  game.load(fen);

  return game.turn() === "w" ? "white" : "black";
};

export const dest_fen = (fen: string, move: string) => {
  const game = new Chess();
  game.load(fen);
  game.move(move);
  return game.fen();
};

export const debounce_instant = (callback: any, delay: any) => {
  let timeoutId: any = null;
  let lastInvocation = new Date(0);

  return (...args: any) => {
    const duration = new Date() - lastInvocation;
    lastInvocation = new Date();

    if (duration > delay) {
      callback(...args);
    } else {
      window.clearInterval(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, delay);
    }
  };
};
export const debounce_instant_async = (callback: any, delay: any) => {
  let timeoutId: any = null;
  let lastInvocation = new Date(0);

  return async (...args: any) => {
    const duration = new Date() - lastInvocation;
    lastInvocation = new Date();

    if (duration > delay) {
      await callback(...args);
    } else {
      window.clearInterval(timeoutId);
      timeoutId = window.setTimeout(async () => {
        await callback(...args);
      }, delay);
    }
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

export function parse_move(fen, move) {
  const game = new Chess();

  game.load(fen);
  const m = make_valid(move);
  game.move(m);
  return game.history().at(-1);
}

export function san_to_lan(fen, move): { orig: cg.Key; dest: cg.Key } {
  const game = new Chess();

  game.load(fen);
  const m = make_valid(move);
  game.move(m);
  const lan = game.history({ verbose: true }).at(0)?.lan;
  return {
    orig: lan?.slice(0, 2) as cg.Key,
    dest: lan?.slice(2, 4) as cg.Key,
  };
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

export const getEnumKeys = (target: any): string[] => {
  return Object.values(target).filter((v) => isNaN(Number(v)));
};
