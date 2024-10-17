import { Card, createEmptyCard } from "ts-fsrs";
import { Database } from "./data/Database";

export interface RepCard {
  fen: string;
  response: string[];
  card: Card;
}

export const emptyRepCard = (fen: string): RepCard => {
  return {
    fen,
    response: [],
    card: createEmptyCard(new Date()),
  };
};

export class Repertoire {
  db: IDBDatabase | null = null;
  new_db: Database<RepCard>;

  constructor() {
    this.new_db = new Database("repertoire");
  }

  ready() {
    return this.db !== null && this.db !== undefined;
  }

  async clear() {
    await this.new_db.removeAll();
  }

  async load() {
    return this.new_db.load();
  }

  async load_json(repertoires: RepCard[]) {
    for (const r of repertoires) {
      await this.new_db.insert(r.fen, r);
    }
  }

  async add(fen: string, move: string) {
    const existing = (await this.new_db.get(fen)) ?? emptyRepCard(fen);
    if (!existing.response.includes(move)) {
      existing.response.push(move);
    }

    await this.new_db.insert(fen, existing);
  }

  async remove(fen: string, move: string) {
    const existing = await this.new_db.get(fen);
    if (existing) {
      existing.response = existing.response.filter((m) => m !== move);
      await this.new_db.insert(fen, existing);
    }
  }

  async schedule(repertoire: RepCard, card: Card) {
    const existing = await this.new_db.get(repertoire.fen);
    if (existing) {
      existing.card = card;
      await this.new_db.insert(repertoire.fen, repertoire);
    }
  }

  async all(): Promise<RepCard[]> {
    return await this.new_db.all();
  }

  async get(fen: string): Promise<RepCard | undefined> {
    return await this.new_db.get(fen);
  }
}
