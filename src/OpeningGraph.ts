import { parse } from "@mliebelt/pgn-parser";
import { Chess } from "chess.js";

export interface Position {
  fen: string;
  count: number;
  moves: { [key: string]: number };
}

export interface Move {
  uci: string;
  count: number;
}

class OpeningGraph {
  db: IDBDatabase | null = null;

  username = "";

  lastChange = {
    white: new Date(),
    black: new Date(),
  };

  lastFetch = {
    white: new Date(0),
    black: new Date(0),
  };

  cache = {
    white: [],
    black: [],
  };

  whiteGames = [];
  blackGames = [];

  load(username: string) {
    this.username = username;
    const req = window.indexedDB.open(`player-graph-${username}`, 2);

    req.onerror = (e) => {
      console.error("DB ERROR");
    };

    req.onsuccess = (e: Event) => {
      if (!this.db) {
        this.db = e.target?.result;
      }
    };

    req.onupgradeneeded = (e) => {
      console.log("UPGRADE NEEDED");

      const db = e.target.result;

      db.createObjectStore("whitewhite", { keyPath: "fen" });
      db.createObjectStore("whiteblack", { keyPath: "fen" });
      db.createObjectStore("blackblack", { keyPath: "fen" });
      db.createObjectStore("blackwhite", { keyPath: "fen" });
    };
  }

  async getAll(): Promise<Position[]> {
    const whitePositions = await this.getMostCommonPositions("white");
    const blackPositions = await this.getMostCommonPositions("black");

    return [...whitePositions, ...blackPositions];
  }

  async getMostCommonPositions(color: string): Promise<Position[]> {
    color = color + color;
    return new Promise((resolve) => {
      if (this.lastFetch[color] > this.lastChange[color]) {
        console.log("cached");
        resolve(this.cache[color]);
      } else {
        console.log("loading...");
        const objectStore = this.db
          ?.transaction(color, "readonly")
          .objectStore(color);

        if (objectStore) {
          let req = objectStore.getAll();

          req.onsuccess = (e) => {
            this.lastFetch[color] = new Date();
            let values = req.result;

            this.cache[color] = values;

            resolve(this.cache[color]);
          };
        }
      }
    });
  }

  async graph() {
    console.log("hi");
  }

  async refresh() {
    console.log(this.username);
    const today = new Date();
    const last_refresh_string = localStorage.getItem("last_refresh");
    const last_refresh = last_refresh_string
      ? new Date(last_refresh_string)
      : new Date(0);

    const timestamp = last_refresh.getTime();

    localStorage.setItem("last_refresh", new Date().toString());
    const url = `https://lichess.org/api/games/user/${this.username}?since=${timestamp}&max=1000&perfType=blitz`;
    try {
      const res = await fetch(url);

      const reader = res.body?.getReader();

      let finished = false;

      while (!finished) {
        const data = await reader?.read();

        if (!data) {
          break;
        }

        const { value, done } = data;
        finished = done;

        if (done) {
          break;
        }

        const chunk = new TextDecoder().decode(value);
        const pgns = parse(chunk, { startRule: "games" });
        this.parseGames(pgns);
      }

      console.log("done");
    } catch (err) {
      console.error(err);
    }
  }

  addMoveAsColor(fen: string, uci: string, color: string, turn: string) {
    if (this.db) {
      const store_name = `${color}${turn}`;
      const transaction = this.db.transaction(store_name, "readwrite");
      const objectStore = transaction.objectStore(store_name);

      const req = objectStore.get(fen);

      req.onsuccess = (e) => {
        let position: Position | undefined = req.result;

        if (position) {
          position.count += 1;

          let existing = position.moves[uci];

          if (existing) {
            position.moves[uci] += 1;
          } else {
            position.moves[uci] = 1;
          }
        } else {
          let movesMap: { [key: string]: number } = {};
          movesMap[uci] = 1;

          position = {
            fen,
            count: 1,
            moves: movesMap,
          };
        }

        objectStore.put(position);
      };

      req.onerror = (e) => {
        console.error("ERROR");
      };
    }
  }

  parseGames(pgns: any) {
    for (const p of pgns) {
      const color = p.tags.White == this.username ? "white" : "black";
      const game = new Chess();
      console.log("------");
      for (const m of p.moves) {
        const uci = m.notation.notation;

        const turn = game.turn() == "w" ? "white" : "black";
        const fen = game.fen();
        game.move(uci);

        this.addMoveAsColor(fen, uci, color, turn);
      }
    }
  }
}

export default OpeningGraph;
