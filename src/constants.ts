import { Evaluation } from "./Engine";

export const STARTING_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
export const STARTING_EVAL: Evaluation = {
  fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  depth: 63,
  mode: "cloud",
  cached: true,
  lines: [
    {
      score: 0.2,
      lan: [
        "e2e4",
        "e7e5",
        "g1f3",
        "b8c6",
        "f1b5",
        "g8f6",
        "e1h1",
        "f6e4",
        "f1e1",
        "e4d6",
      ],
      san: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "Nf6",
        "O-O",
        "Nxe4",
        "Re1",
        "Nd6",
      ],
    },
    {
      score: 0.2,
      lan: [
        "g1f3",
        "d7d5",
        "d2d4",
        "e7e6",
        "c2c4",
        "g8f6",
        "b1c3",
        "f8b4",
        "c4d5",
        "e6d5",
      ],
      san: ["Nf3", "d5", "d4", "e6", "c4", "Nf6", "Nc3", "Bb4", "cxd5", "exd5"],
    },
    {
      score: 0.2,
      lan: [
        "d2d4",
        "g8f6",
        "c2c4",
        "e7e6",
        "g1f3",
        "d7d5",
        "b1c3",
        "f8b4",
        "c4d5",
        "e6d5",
      ],
      san: ["d4", "Nf6", "c4", "e6", "Nf3", "d5", "Nc3", "Bb4", "cxd5", "exd5"],
    },
  ],
};
