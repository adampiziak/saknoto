import { Card, createEmptyCard } from "ts-fsrs";

export interface RepCard {
  fen: string;
  response: string[];
  card: Card;
}
export class Repertoire {
  db: IDBDatabase | null = null;

  constructor() {}

  ready() {
    return this.db !== null && this.db !== undefined;
  }

  load() {
    return new Promise<void>((resolve, reject) => {
      if (this.db) {
        resolve();
      }
      const req = window.indexedDB.open("repertoire", 2);
      req.onerror = (e) => {
        console.error("DB ERROR");
      };

      req.onsuccess = (e: Event) => {
        if (!this.db) {
          this.db = e.target?.result;
        }

        resolve();
      };

      req.onupgradeneeded = (e) => {
        console.log("UPGRADE NEEDED");

        const db = e.target.result;

        const objectStore = db.createObjectStore("position", {
          keyPath: "fen",
        });
      };
    });
  }

  load_json(repertoires: RepCard[]) {
    for (const r of repertoires) {
      const transaction = this.db.transaction("position", "readwrite");
      const objectStore = transaction.objectStore("position");
      const typed_rep: RepCard = {
        card: {
          due: new Date(r.card.due),
          last_review: new Date(r.card.last_review),
          ...r.card,
        },
        ...r,
      };
      console.log(typed_rep);
      objectStore.put(typed_rep);
    }
  }

  addLine(fen: string, response: string) {
    console.log("adding response to LINE");
    if (this.db) {
      console.log(this.db);
      const transaction = this.db.transaction("position", "readwrite");
      const objectStore = transaction.objectStore("position");
      const card = createEmptyCard();

      objectStore.put({ fen, response: [response], card });
    }
  }

  removeLine(fen: string) {
    console.log("adding response to LINE");
    if (this.db) {
      console.log(this.db);
      const transaction = this.db.transaction("position", "readwrite");
      const objectStore = transaction.objectStore("position");

      objectStore.delete(fen);
    }
  }

  updateRep(rep: RepCard, card: Card) {
    if (this.db) {
      const transaction = this.db.transaction("position", "readwrite");
      const objectStore = transaction.objectStore("position");

      objectStore.put({ fen: rep.fen, response: rep.response, card });
    }
  }

  getAll(): Promise<RepCard[]> {
    if (this.db) {
      const transaction = this.db.transaction("position", "readonly");
      const objectStore = transaction.objectStore("position");
      const req = objectStore.getAll();
      return new Promise((resolve, reject) => {
        req.onsuccess = (e) => {
          resolve(req.result);
        };

        req.onerror = (e) => {
          reject();
        };
      });
    } else {
      console.error("ERROR");
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }

  getLine(fen: string) {
    return new Promise(async (resolve, reject) => {
      if (!this.db) {
        await this.load();
      }

      const transaction = this.db.transaction("position", "readonly");
      const objectStore = transaction.objectStore("position");
      const req = objectStore.get(fen);

      req.onsuccess = (event) => {
        const result = req.result ?? [];
        resolve(result);
      };

      req.onerror = (e) => {
        reject(e);
      };
    });
  }
}
