export function parse_info(message: string): LineEval | null {
  const parts = message.split(" ");
  const command = parts[0];

  switch (command) {
    case "info":
      if (parts.includes("currmove")) {
        return null;
      }
      // console.log(message);
      return parse_line(parts);
    default:
      return null;
  }
}

const info_keywords = [
  "depth",
  "seldepth",
  "time",
  "nodes",
  "pv",
  "multipv",
  "score",
];

export interface LineEval {
  multipv: number;
  cp: number;
  depth: number;
  line: string[];
}

function parse_line(parts: string[]): LineEval {
  let i = 1;
  const len = parts.length;
  const depth = parts[2];

  while (parts[i] != "multipv" && i < len) {
    i += 1;
  }

  i += 1;

  // console.log(i);
  const multipv = parts[i];

  i += 3;
  // console.log(i);
  const cp = parts[i];

  while (parts[i] != "pv" && i < len) {
    i += 1;
  }

  i += 1;
  // console.log(i);

  const line = parts.slice(i);

  // if (line.length < 3) {
  //   console.log(parts);
  // }

  return {
    multipv: Number(multipv),
    cp: Number(cp),
    depth: Number(depth),
    line,
  };
}
