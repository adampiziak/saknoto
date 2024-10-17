import { Database } from "~/data/Database";
import OpeningGraph from "~/OpeningGraph";
import { Repertoire } from "~/Repertoire";
import { dest_fen, getTurn, sleep, startingFen } from "~/utils";
import LichessExplorer from "./LichessExplorer";
import { isServer } from "solid-js/web";
import { ChessColor } from "./common";
import { Subscriber, SubscriberManagerMixin } from "./SubscriberManager";

export interface OpeningPositionCandidate {
  fen: string;
  count: number;
}

export interface CandidateTodo {
  fen: string;
  playerGames: number;
  playerWinRate: number;
  lichessWinRate: number;
  playerEloDelta: number;
  expectedEloDelta: number;
}

export enum SearchState {
  NOT_SEARCHING,
  SEARCHING,
  NONE_FOUND,
}

@Subscriber
class OpeningTrainer {
  db: Database<PositionCandidate>;
  dbTodo: Database<CandidateTodo>;
  dbReviewed: Database<string>;
  repertoire: Repertoire;
  openingGraph: OpeningGraph;
  explorer: LichessExplorer;
  searching: boolean;
  stopSearching: boolean;
  startingFen: string = "";
  searchQueue: OpeningPositionCandidate[] = [];
  todoQueue: string[];
  playerColor: ChessColor = ChessColor.White;
  state: SearchState = SearchState.NOT_SEARCHING;

  constructor() {
    this.db = new Database("opening-queue");
    this.dbTodo = new Database("opening-todo");
    this.dbReviewed = new Database("opening-reviewed");
    this.repertoire = new Repertoire();
    this.openingGraph = new OpeningGraph();
    this.explorer = new LichessExplorer();
    this.searching = false;
    this.stopSearching = false;
    this.searchQueue = [];
  }

  async load() {
    if (isServer) {
      return;
    }
    await this.db.load();
    await this.repertoire.load();
    await this.openingGraph.load_wait();
    await this.dbReviewed.load();
    await this.dbTodo.load();
    const startingPosition = await this.db.get(startingFen());
    if (!startingPosition) {
      await this.db.insert(startingFen(), {
        fen: startingFen(),
        count: Number.MAX_VALUE,
        reviewed: false,
      });
    }
    await this.db.insert(startingFen(), {
      fen: startingFen(),
      count: Number.MAX_VALUE,
      reviewed: false,
    });
  }
  emit(val: any) {}

  async startSearch() {
    if (!this.searching) {
      this.search();
    } else {
    }
  }

  async setStartingPosition(fen: string) {
    console.log(`starting position is ${fen}`);
    if (this.startingFen !== fen) {
      this.startingFen = fen;
      const node = await this.explorer.get(this.startingFen);
      this.searchQueue = [];
      this.todoQueue = [];
      this.playerColor =
        getTurn(fen) === "white" ? ChessColor.Black : ChessColor.White;
      console.log(`player color is ${this.playerColor}`);
      for (const m of node.moves) {
        this.searchQueue.push({
          fen: dest_fen(this.startingFen, m.san),
          count: total(m),
        });
      }
      this.search();
    }
  }

  stopSearch() {
    this.stopSearching = true;
  }

  async search() {
    this.searching = true;
    // console.log(this.searchQueue.length);
    // this.searchQueue.sort((a, b) => b.count - a.count);

    // for (let i = 0; i < 5; i++) {
    //   const candidate = this.searchQueue.shift();
    //   if (candidate) {
    //     const node = await this.explorer.get(candidate.fen);
    //     for (const m of node.moves.slice(0, 3)) {
    //       this.searchQueue.push({
    //         fen: dest_fen(candidate.fen, m.san),
    //         count: total(m),
    //       });
    //     }
    //   }
    // }
  }

  async clear() {
    await this.dbTodo.removeAll();
    await this.dbReviewed.removeAll();
  }

  async add(candidate: PositionCandidate) {
    const existing = (await this.db.get(candidate.fen)) ?? {
      fen: candidate.fen,
      count: 0,
      reviewed: false,
    };
    existing.count += candidate.count;
    existing.reviewed = candidate.reviewed;

    await this.db.insert(candidate.fen, existing);
  }

  async markReviewed(fen: string) {
    const existing = await this.db.get(fen);
    if (existing) {
      existing.reviewed = true;
      await this.db.insert(existing.fen, existing);
    }
  }

  async getLichessWinRate(fen: string) {
    const lichessNode = await this.explorer.get(fen);
    if (lichessNode) {
      return winRate(lichessNode);
    } else {
      return 0.5;
    }
  }

  async next(): Promise<string | undefined> {
    this.searchQueue.sort((a, b) => b.count - a.count);
    for (let i = 0; i < 20; i++) {
      const node = this.searchQueue.shift();
      if (node) {
        const rep = await this.repertoire.get(node.fen);
        const history = await this.openingGraph.getPosition(
          node.fen,
          this.playerColor,
        );
        const last_played = history?.date_last_played;
        if (last_played) {
          let dt = Date.parse(last_played);
          let now = new Date();
          const diff = now.getTime() - dt;
          const days = Math.round(diff / (1000 * 3600 * 24));
          if (days > 60) {
            continue;
          }
        } else {
          continue;
        }

        if (rep) {
          const dest = dest_fen(node.fen, rep.response.at(0)!);
          const linode = await this.explorer.get(dest);
          for (const m of linode.moves.slice(0, 5)) {
            this.searchQueue.push({
              count: total(m),
              fen: dest_fen(dest, m.san),
            });
          }
        } else {
          this.searchQueue.unshift(node);
          return node.fen;
        }
      }
    }

    return undefined;
  }
}

const winRate = (node: any) => {
  return node.white / (node.white + node.black);
};

const nearestTenth = (num: number) => {
  return Math.round(num * 10) / 10;
};

const total = (node: any) => {
  return node.black + node.white + node.draws;
};
export default OpeningTrainer;
