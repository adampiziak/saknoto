enum DatabaseStatus {
  READY,
  LOADING,
  ERROR,
}

export class Table<T> {
  store: IDBObjectStore;

  constructor(store: IDBObjectStore) {
    this.store = store;
  }
}

export class Database<T> {
  name: string;
  db?: IDBDatabase;
  status: DatabaseStatus;

  constructor(tablename: string) {
    this.name = tablename;
    this.status = DatabaseStatus.LOADING;
  }

  async table<O>(tableName: string): Promise<Table<O> | undefined> {
    return new Promise((resolve) => {
      const transaction = this.db?.transaction(tableName);
      const store = transaction?.objectStore(tableName);

      if (!store) {
        return resolve(undefined);
      }

      resolve(new Table(store));
    });
  }

  get(key: string): Promise<T | undefined> {
    return new Promise((res, rej) => {
      if (this.status !== DatabaseStatus.READY) {
        rej("NOT READY");
      }

      const store = this.db
        ?.transaction(this.name, "readonly")
        .objectStore(this.name);

      if (!store) {
        rej("UNDEFINED STORE");
        return;
      }

      const request = store.get(key);

      request.onsuccess = (e) => {
        const target = e.target as IDBRequest<T>;

        res(target.result);
        return;
      };

      request.onerror = () => {
        rej("DB GET ERROR");
        return;
      };
    });
  }

  ready() {
    return this.status === DatabaseStatus.READY;
  }

  async size(): Promise<number> {
    return (await this.request<number>((store: IDBObjectStore) =>
      store.count(),
    )) as number;
  }

  async all(): Promise<T[]> {
    return (await this.request<T[]>((store) => store.getAll())) ?? [];
  }

  async remove(key: string) {
    return await this.request<undefined>((store) => store.delete(key));
  }
  async removeAll() {
    return await this.request<undefined>((store) => store.clear());
  }

  request<R>(
    callback: (store: IDBObjectStore) => IDBRequest<R>,
  ): Promise<R | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.ready()) {
        return reject(`Database <${this.name}> is not ready.}`);
      }

      const store = this.store();
      if (!store) {
        return reject(`Database <${this.name}> could not open store.`);
      }

      const request: IDBRequest<R> = callback(store);
      request.onsuccess = () => {
        const result = request.result;

        return resolve(result);
      };

      request.onerror = () => {
        return reject("Database error.");
      };
    });
  }

  store(): IDBObjectStore | undefined {
    return this.db?.transaction(this.name, "readwrite").objectStore(this.name);
  }

  insert(key: string, value: T) {
    return new Promise((res, rej) => {
      if (this.status !== DatabaseStatus.READY) {
        rej("NOT READY");
        return;
      }

      const store = this.db
        ?.transaction(this.name, "readwrite")
        .objectStore(this.name);

      if (!store) {
        rej("UNDEFINED STORE");
        return;
      }

      const request = store.put(value, key);
      request.onsuccess = (e) => {
        const target = e.target as IDBRequest<string>;

        if (!target.result) {
          rej();
          return;
        }

        res(target.result);
        return;
      };

      request.onerror = () => {
        rej("DB GET ERROR");
        return;
      };
    });
  }

  load() {
    return new Promise<void>((res, rej) => {
      if (this.status === DatabaseStatus.ERROR) {
        return rej();
      }

      if (this.status === DatabaseStatus.READY) {
        return res();
      }
      if (typeof window === "undefined") {
        return res();
      }

      const request: IDBOpenDBRequest = window.indexedDB.open(this.name);

      request.onerror = (e) => {
        this.status = DatabaseStatus.ERROR;
        return rej(e);
      };

      request.onsuccess = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        this.status = DatabaseStatus.READY;
        res();
      };

      request.onupgradeneeded = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        this.db.createObjectStore(this.name);
        this.status = DatabaseStatus.READY;
        res();
      };
    });
  }
}
