import { Database } from "~/data/Database";
import OpeningGraph from "~/OpeningGraph";
import { Repertoire } from "~/Repertoire";
import { sleep, startingFen } from "~/utils";
import LichessExplorer from "./LichessExplorer";
import { isServer } from "solid-js/web";

export interface PositionCandidate {
  fen: string;
  count: number;
  reviewed: boolean;
}

export interface CandidateTodo {
  fen: string;
  playerGames: number;
  playerWinRate: number;
  lichessWinRate: number;
  playerEloDelta: number;
  expectedEloDelta: number;
}

export class RepertoireQueue {
  db: Database<PositionCandidate>;
  dbTodo: Database<CandidateTodo>;
  dbReviewed: Database<string>;
  repertoire: Repertoire;
  openingGraph: OpeningGraph;
  explorer: LichessExplorer;
  searching: boolean;
  stopSearching: boolean;

  constructor() {
    this.db = new Database("repertoire-queue");
    this.dbTodo = new Database("repertoire-candidate");
    this.dbReviewed = new Database("rep-candidate-reviewed");
    this.repertoire = new Repertoire();
    this.openingGraph = new OpeningGraph();
    this.explorer = new LichessExplorer();
    this.searching = false;
    this.stopSearching = false;
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

  async startSearch() {
    if (!this.searching) {
      this.search();
    } else {
    }
  }

  stopSearch() {
    this.stopSearching = true;
  }

  async search() {
    this.searching = true;
    let i = 0;
    const all = [
      ...(await this.openingGraph.getAllSplit()).whitewhite.values(),
    ];
    all.sort((a, b) => b.count - a.count);
    const slice = all.slice(0, 1000);
    const reps = new Set((await this.repertoire.all()).map((a) => a.fen));
    const withoutRep = slice.filter((n) => !reps.has(n.fen));
    const reviewed = new Set(await this.dbReviewed.all());
    const withoutReview = withoutRep.filter((n) => !reviewed.has(n.fen));
    const queued = new Set((await this.dbTodo.all()).map((a) => a.fen));

    const remainding = withoutReview.filter((n) => !queued.has(n.fen));
    remainding.sort((a, b) => b.count - a.count);
    while (i < 20 - queued.size) {
      if (this.stopSearching) {
        break;
      }
      const p = remainding[i];
      i += 1;
      await sleep(1000);
      const playerWinRate = winRate(p.result);
      const playerLossRate = 1 - playerWinRate;
      const lichessWinRate = await this.getLichessWinRate(p.fen);
      const lichessLossRate = 1 - lichessWinRate;
      const todoPosition: CandidateTodo = {
        fen: p.fen,
        playerGames: p.count,
        playerEloDelta: nearestTenth(
          (playerWinRate - playerLossRate) * 7 * p.count,
        ),
        playerWinRate: nearestTenth(playerWinRate),
        expectedEloDelta: nearestTenth(
          (lichessWinRate - lichessLossRate) * 7 * p.count,
        ),
        lichessWinRate: nearestTenth(lichessWinRate),
      };
      if (todoPosition.playerWinRate < todoPosition.lichessWinRate) {
        this.dbTodo.insert(todoPosition.fen, todoPosition);
      } else {
        this.dbReviewed.insert(todoPosition.fen, todoPosition.fen);
      }
    }
    this.stopSearching = false;
    this.searching = false;
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

  async next(): Promise<CandidateTodo | undefined> {
    const queue = await this.dbTodo.all();
    const repertoire = await this.repertoire.all();
    const repSet = new Set(repertoire.map((r) => r.fen));
    const queueSet = new Set(queue.map((n) => n.fen));

    const remove = repSet.intersection(queueSet);
    for (const fen of remove) {
      await this.dbTodo.remove(fen);
    }

    const todoSet = queueSet.difference(repSet);
    const filtered = queue.filter((n) => todoSet.has(n.fen));

    filtered.sort(
      (a, b) =>
        b.expectedEloDelta -
        b.playerEloDelta -
        (a.expectedEloDelta - a.playerEloDelta),
    );
    const node = filtered.at(0);
    return node;
  }
}

const winRate = (node: any) => {
  return node.white / (node.white + node.black);
};

const nearestTenth = (num: number) => {
  return Math.round(num * 10) / 10;
};
