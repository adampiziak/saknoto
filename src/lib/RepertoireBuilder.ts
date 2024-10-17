import UserManager from "~/UserMananger";
import LichessExplorer from "./LichessExplorer";
import { dest_fen, getTurn, sleep, startingFen } from "~/utils";
import OpeningGraph from "~/OpeningGraph";
import { Repertoire } from "~/Repertoire";
import { Game } from "~/Game";
import { Accessor } from "solid-js";
import { PositionCandidate, RepertoireQueue } from "./RepertoireWorker";

export class RepertoireBuilder {
  username: string;
  explorer: LichessExplorer;
  listeners: any = [];
  openingGraph: OpeningGraph;
  repertoireDB: Repertoire;
  game: Accessor<Game>;
  repQueue: RepertoireQueue;
  whitewhite: any[] = [];
  thousand: any[] = [];

  constructor(game: Accessor<Game>) {
    const userManager = new UserManager();
    this.explorer = new LichessExplorer();
    this.openingGraph = new OpeningGraph();
    userManager.load();
    const username = userManager.get();
    this.repertoireDB = new Repertoire();
    this.game = game;

    this.repQueue = new RepertoireQueue();

    if (username) {
      this.username = username;
    } else {
      this.username = "";
    }
  }

  onPosition(callback: any) {
    this.listeners.push(callback);
  }
  emit(fen: string) {
    for (const listener of this.listeners) {
      listener(fen);
    }
  }

  processPosition(fen: string, moves: any[]) {
    setTimeout(async () => {
      for (const m of moves) {
        const move_dest = dest_fen(fen, m.san);
        await this.explorer.get(move_dest);
      }
    }, 100);
  }

  async getPersonalNext() {
    await this.openingGraph.load_wait();
    await this.repertoireDB.load();
    if (this.whitewhite.length === 0) {
      this.whitewhite = [
        ...(await this.openingGraph.getAllSplit()).whitewhite.values(),
      ];

      this.whitewhite.sort((a, b) => b.count - a.count);
      this.thousand = this.whitewhite.slice(0, 1000);
    }
    const withoutRep = [];
    for (const it of this.thousand) {
      const v = await this.repertoireDB.get(it.fen);
      if (v === undefined) {
        withoutRep.push(it);
      }
    }
    withoutRep.sort((a, b) => b.count - a.count);
    const next = withoutRep.at(0);
    console.log("personal is");
    console.log(next);
    return next?.fen;
  }

  async getNextPosition() {
    await this.openingGraph.load_wait();
    await this.repertoireDB.load();
    await this.repQueue.load();

    const playerColor = "white";

    let item = await this.repQueue.next();
    console.log("FIRST");
    console.log(item);

    while (item !== undefined) {
      console.log(item.fen);
      const positionTurn = getTurn(item.fen);
      if (positionTurn !== playerColor) {
        throw new Error("wrong color");
      }
      let played = await this.openingGraph.getPosition(
        item?.fen,
        "white",
        "white",
      );
      if (played === undefined) {
        await this.repQueue.markReviewed(item.fen);
        item = await this.repQueue.next();
        continue;
      }

      let r = played.result;
      const winrate = Math.round((r.white / (r.white + r.black)) * 100);

      const repertoire_move = await this.repertoireDB.get(item.fen);

      if (repertoire_move) {
        await this.repQueue.markReviewed(item.fen);
        const moves = Object.values(repertoire_move.response);

        const first = moves.at(0);
        if (first) {
          const dest = dest_fen(item.fen, first);
          const dest_val = await this.explorer.get(dest);
          let per_total = 0;
          for (const move of dest_val.moves) {
            const move_dest = dest_fen(dest, move.san);
            const move_count = total(move);
            const per = Math.round((move_count / total(dest_val)) * 100);
            per_total += per;
            console.log(per_total);
            const candidate: PositionCandidate = {
              fen: move_dest,
              count: move_count,
              reviewed: false,
            };
            await this.repQueue.add(candidate);
            if (per_total > 95) {
              break;
            }
          }
        }
      } else {
        if (winrate > 50) {
          await this.repQueue.markReviewed(item.fen);
          item = await this.repQueue.next();
          continue;
        }
        console.log("response needed");
        return item.fen;
      }
      item = await this.repQueue.next();
    }
    console.log("none left in queue");
  }
}

const total = (val: any) => {
  return val.white + val.draws + val.black;
};
