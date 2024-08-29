import { Database } from "./Database";

interface CacheItem<T> {
  key: string;
  value: T;
  datetime: Date;
}

export class LRUCache<T> {
  maxsize: number;
  name: string;
  db: Database<CacheItem<T>>;
  size?: number;

  constructor(name: string, maxsize = 1000) {
    this.name = name;
    this.maxsize = maxsize;
    this.db = new Database(name);
  }

  load() {
    return this.db.load();
  }

  async get(key: string) {
    const result = await this.db.get(key);
    return result?.value;
  }

  async clear() {
    await this.db?.removeAll();
  }

  async count() {
    if (!this.size) {
      this.size = await this.db.size();
    }

    return this.size;
  }

  async remove(key: string) {
    console.log("REMOVING");
    await this.db.remove(key);
  }

  async add(key: string, value: T) {
    if (!this.size) {
      this.size = await this.db.size();
    }

    if (this.size > this.maxsize) {
      const all: CacheItem<T>[] = await this.db.getAll();
      all.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

      const marked = all.slice(0, 100);

      this.size -= 100;
      for (const m of marked) {
        await this.db.remove(m.key);
      }
    }

    this.size += 1;

    const item: CacheItem<T> = {
      key,
      value,
      datetime: new Date(),
    };

    await this.db.insert(key, item);
  }
}
