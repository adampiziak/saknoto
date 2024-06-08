import { Card, createEmptyCard } from "ts-fsrs";

export interface RepCard {
  fen: string;
  response: string;
  card: Card;
}
export class Repertoire {
  db: IDBDatabase | null = null;

  constructor() {}

  load() {
    const req = window.indexedDB.open("repertoire", 2);

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

      const objectStore = db.createObjectStore("position", { keyPath: "fen" });
    };
  }

  addLine(fen: string, response: string) {
    console.log("adding response to LINE");
    if (this.db) {
      console.log(this.db);
      const transaction = this.db.transaction("position", "readwrite");
      const objectStore = transaction.objectStore("position");
      const card = createEmptyCard();

      objectStore.put({ fen, response, card });
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
    console.log("GETTING POSITION");
    if (this.db) {
      const transaction = this.db.transaction("position", "readonly");
      const objectStore = transaction.objectStore("position");
      const req = objectStore.get(fen);

      return new Promise((resolve, reject) => {
        req.onsuccess = (event) => {
          console.log("RESPONSE");
          console.log(fen);
          resolve(req.result);
        };

        req.onerror = (e) => {
          reject();
        };
      });
    } else {
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
}
