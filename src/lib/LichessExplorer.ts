import { LRUCache } from "~/data/Cache";
import { sleep } from "~/utils";

export default class LichessExplorer {
  cache: LRUCache<any>;
  lastRequest: Date;

  constructor() {
    this.cache = new LRUCache("lichess-explorer");
    this.lastRequest = new Date(0);
  }

  async get(fen: string) {
    await this.cache.load();
    const cached = await this.cache.get(fen);
    if (cached) {
      return cached;
    }
    const now = Date.now();
    const diff = now - this.lastRequest;
    const remain = 2000 - diff;
    if (remain > 0) {
      await sleep(remain);
    }
    this.lastRequest = now;

    const url =
      "https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz&ratings=2000,2400&fen=" +
      encodeURIComponent(fen);

    const res = await fetch(url);
    const json = await res.json();

    if (json) {
      this.cache.add(fen, json);
    }

    return json;
  }
}
