import { ParseTree, parse } from "@mliebelt/pgn-parser";
import { Chess } from "chess.js";
import UserManager from "./UserMananger";
import { STARTING_FEN } from "./constants";
import { Positioner } from "@kobalte/core/popper";

const API_GAME_TIMESTAMP_KEY = "api-game-timestamp";

export interface Position {
  fen: string;
  count: number;
  moves: { [key: string]: Move };
  result: Result;
}

export interface Move {
  uci: string;
  count: number;
  result: Result;
}

export interface Split {
  whitewhite: Map<string, Position>;
  whiteblack: Map<string, Position>;
  blackblack: Map<string, Position>;
  blackwhite: Map<string, Position>;
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

  ready = false;

  load_wait() {
    return new Promise<void>((resolve, reject) => {
      if (this.ready) {
        resolve();
      }

      const user_manager = new UserManager();
      user_manager.load();
      const name = user_manager.get();

      if (name) {
        this.username = name;
      } else {
        resolve();
        return;
      }

      const req = window.indexedDB.open(`player-graph-${this.username}`, 2);

      req.onerror = (e) => {
        console.error("DB ERROR");
      };

      req.onsuccess = (e: Event) => {
        if (!this.db) {
          this.db = e.target?.result;
        }

        if (this.db) {
          resolve();
        } else {
          reject();
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
    });
  }

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
  async getPosition(
    fen: string,
    playerColor: string,
    turn: string,
  ): Promise<Position | undefined> {
    // console.log(`GET FEN: ${playerColor} ${turn}`);
    return new Promise((resolve, reject) => {
      const store_name = playerColor + turn;
      // console.log(store_name);
      const store = this.db
        ?.transaction(store_name, "readonly")
        .objectStore(store_name);

      if (store) {
        let req = store.get(fen);

        req.onsuccess = (e) => {
          const moves = req.result?.moves;
          if (!moves) {
            console.log("NOT FOUND");
            resolve(undefined);
            return;
          }
          resolve(req.result);
        };

        req.onerror = (e) => {
          resolve(undefined);
        };
      } else {
        reject("object store is null");
      }
    });
  }

  async getFen(fen: string, playerColor: string, turn: string): Promise<any> {
    // console.log(`GET FEN: ${playerColor} ${turn}`);
    return new Promise((resolve, reject) => {
      const store_name = playerColor + turn;
      // console.log(store_name);
      const store = this.db
        ?.transaction(store_name, "readonly")
        .objectStore(store_name);

      if (store) {
        let req = store.get(fen);

        req.onsuccess = (e) => {
          const moves = req.result?.moves;
          if (!moves) {
            console.log("NOT FOUND");
            resolve([]);
            return;
          }
          const list = Object.entries(moves).toSorted(
            (a, b) => b[1].count - a[1].count,
          );
          resolve(list);
        };

        req.onerror = (e) => {
          resolve("error");
        };
      } else {
        reject("object store is null");
      }
    });
  }

  isready() {
    return this.db !== undefined && this.db !== null;
  }

  async getAll(): Promise<Position[]> {
    const whitePositions = await this.getMostCommonPositions("white");
    const blackPositions = await this.getMostCommonPositions("black");

    return [...whitePositions, ...blackPositions];
  }

  async getBlackWhite(): Promise<Position[]> {
    return new Promise((res, rej) => {
      const store = this.db
        ?.transaction("blackwhite", "readonly")
        .objectStore("blackwhite");
      const req = store?.getAll();

      req.onsuccess = (e) => {
        res(req?.result);
      };
    });
  }

  async getAllSplit(): Promise<Split> {
    let combinations = ["whitewhite", "whiteblack", "blackblack", "blackwhite"];

    let res: Split = {
      whitewhite: new Map(),
      whiteblack: new Map(),
      blackblack: new Map(),
      blackwhite: new Map(),
    };

    for (const c of combinations) {
      let a: Position[] = await this.getCombo(c);
      let m = a.reduce((map: Map<string, Position>, val: Position) => {
        map.set(val.fen, val);
        return map;
      }, new Map());
      res[c] = m;
    }

    return res;
  }

  async getCombo(key: string): Promise<Position[]> {
    return new Promise((resolve, reject) => {
      const store = this.db?.transaction(key, "readonly").objectStore(key);

      if (store) {
        let request = store?.getAll();

        request.onsuccess = (e) => {
          resolve(request.result);
        };
      }
    });
  }

  async getMostCommonPositions(color: string): Promise<Position[]> {
    color = color + color;
    return new Promise((resolve) => {
      if (this.lastFetch[color] > this.lastChange[color]) {
        console.log("cached");
        resolve(this.cache[color]);
      } else {
        console.log("loading...");
        if (!this.db) {
          console.log("NOT READY");
        }
        const objectStore = this.db
          ?.transaction(color, "readonly")
          .objectStore(color);

        // console.log(objectStore);

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
    if (!this.username) {
      return;
    }
    const today = new Date();
    const last_refresh_string = localStorage.getItem("last_refresh");
    const last_refresh = last_refresh_string
      ? new Date(last_refresh_string)
      : new Date(0);

    const apiTimestampString = localStorage.getItem(API_GAME_TIMESTAMP_KEY);
    let apiTimestamp: number;
    if (apiTimestampString) {
      apiTimestamp = Number(apiTimestampString);
    } else {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      apiTimestamp = threeMonthsAgo.getTime();
    }

    console.log("last api timestamp");
    console.log(apiTimestamp);
    console.log(new Date(apiTimestamp));

    const since = (today.getTime() - last_refresh.getTime()) / 1000;
    const mins = since / 60;

    if (mins < 10) {
      return;
    }

    localStorage.setItem("last_refresh", new Date().toString());
    const url = `https://lichess.org/api/games/user/${this.username}?since=${apiTimestamp}&max=500&perfType=blitz?rated=true&sort=dateAsc`;
    // const url = `https://lichess.org/api/games/user/${this.username}?max=1&perfType=blitz?rated=true`;
    // const url = `https://lichess.org/api/games/user/${this.username}?max=10&perfType=blitz`;
    try {
      const res = await fetch(url);

      const reader = res.body?.getReader();

      let finished = false;

      let first = true;
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
        const pgns: ParseTree[] = parse(chunk, {
          startRule: "games",
        }) as ParseTree[];
        if (first) {
          localStorage.setItem("lastgame", JSON.stringify(pgns[0]));
          first = false;
        }
        await this.parseGames(pgns);
      }

      console.log("done");
    } catch (err) {
      console.error(err);
    }
  }

  addMoveAsColor(
    fen: string,
    uci: string,
    color: string,
    turn: string,
    r: Result,
    site: string,
  ) {
    return new Promise<void>((res, rej) => {
      if (
        fen === "rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2"
      ) {
        console.log("xxxxxxxxxxx");
        console.log(site);
        console.log(r);
      }
      if (this.db) {
        const store_name = `${color}${turn}`;
        // console.log(store_name);
        const transaction = this.db.transaction(store_name, "readwrite");
        const objectStore = transaction.objectStore(store_name);

        const req = objectStore.get(fen);

        req.onsuccess = (e) => {
          let position: Position = req.result ?? {
            fen,
            count: 0,
            moves: {},
            result: {
              white: 0,
              black: 0,
              draw: 0,
            },
          };

          position.result.white += r.white;
          position.result.black += r.black;
          position.result.draw += r.draw;
          position.count += 1;

          if (!position.moves[uci]) {
            position.moves[uci] = {
              uci,
              count: 0,
              result: { white: 0, black: 0, draw: 0 },
            };
          }

          position.moves[uci].count += 1;
          position.moves[uci].result.white += r.white;
          position.moves[uci].result.black += r.black;
          position.moves[uci].result.draw += r.draw;

          const a = objectStore.put(position);
          a.onsuccess = (e) => {
            res();
          };
          a.onerror = (e) => {
            console.error(e);
            rej();
          };
        };

        req.onerror = (e) => {
          console.error("ERROR");
          rej();
        };
      }
    });
  }

  async parseGames(pgns: ParseTree[]) {
    for (const p of pgns) {
      const color =
        p.tags.White.toLowerCase() == this.username.toLowerCase()
          ? "white"
          : "black";
      if (p.tags?.Variant != "Standard") {
        continue;
      }

      console.log(p);
      const dt = new Date();
      const { year, month, day } = p.tags.UTCDate;
      const { hour, minute, second } = p.tags.UTCTime;

      if (
        year !== undefined &&
        month !== undefined &&
        day !== undefined &&
        hour !== undefined &&
        minute !== undefined &&
        second !== undefined
      ) {
        dt.setUTCFullYear(year, month - 1, day);
        dt.setUTCHours(hour, minute, second);
        console.log(dt);

        const timestamp = dt.getTime();

        localStorage.setItem(API_GAME_TIMESTAMP_KEY, timestamp.toString());
      } else {
        console.log("no date");
      }

      // console.log(p.tags?.Result);
      const resultTag = p.tags?.Result;
      const info = p.tags?.Site;
      const r2: Result = {
        white: 0,
        black: 0,
        draw: 0,
      };
      // console.log(resultTag);
      // console.log(typeof resultTag);
      switch (resultTag?.split("-")[0]) {
        case "1":
          r2.white = 1;
          break;
        case "0":
          r2.black = 1;
          break;
        case "1/2":
          r2.draw = 1;
          break;
      }

      const game = new Chess();
      console.log("------");
      // console.log(r2);
      for (const m of p.moves) {
        const uci = m.notation.notation;

        const turn = game.turn() == "w" ? "white" : "black";
        const fen = game.fen();
        game.move(uci);

        await this.addMoveAsColor(fen, uci, color, turn, r2, info);
      }
    }
  }
}

export interface Result {
  white: number;
  black: number;
  draw: number;
}

export default OpeningGraph;
