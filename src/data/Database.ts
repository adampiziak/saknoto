enum DatabaseStatus {
  READY,
  LOADING,
  ERROR,
}

export class Database<T> {
  tablename: string;
  db?: IDBDatabase;
  status: DatabaseStatus;

  constructor(tablename: string) {
    this.tablename = tablename;
    this.status = DatabaseStatus.LOADING;
  }

  get(key: string): Promise<T | undefined> {
    return new Promise((res, rej) => {
      if (this.status !== DatabaseStatus.READY) {
        rej("NOT READY");
      }

      const store = this.db
        ?.transaction(this.tablename, "readonly")
        .objectStore(this.tablename);

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
    return await this.request<number>((store: IDBObjectStore) => store.count());
  }

  async getAll() {
    return await this.request<any>((store) => store.getAll());
  }

  async remove(key: string) {
    return await this.request<undefined>((store) => store.delete(key));
  }
  async removeAll() {
    return await this.request<undefined>((store) => store.clear());
  }

  request<R>(callback: (store: IDBObjectStore) => IDBRequest<R>): Promise<R> {
    return new Promise((resolve, reject) => {
      if (!this.ready()) {
        return reject(`Database <${this.tablename}> is not ready.}`);
      }

      const store = this.store();
      if (!store) {
        return reject(`Database <${this.tablename}> could not open store.`);
      }

      const request: IDBRequest<R> = callback(store);
      request.onsuccess = () => {
        const result = request.result;

        if (result === undefined) {
          return reject("No result for request.");
        }

        return resolve(result);
      };

      request.onerror = () => {
        return reject("Database error.");
      };
    });
  }

  store(): IDBObjectStore | undefined {
    return this.db
      ?.transaction(this.tablename, "readwrite")
      .objectStore(this.tablename);
  }

  insert(key: string, value: any) {
    return new Promise((res, rej) => {
      if (this.status !== DatabaseStatus.READY) {
        rej("NOT READY");
        return;
      }

      const store = this.db
        ?.transaction(this.tablename, "readwrite")
        .objectStore(this.tablename);

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
        rej();
      }

      if (this.status === DatabaseStatus.READY) {
        res();
      }

      const request: IDBOpenDBRequest = window.indexedDB.open(this.tablename);

      request.onerror = (e) => {
        rej(e);
        this.status = DatabaseStatus.ERROR;
      };

      request.onsuccess = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        this.status = DatabaseStatus.READY;
        res();
      };

      request.onupgradeneeded = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        this.db.createObjectStore(this.tablename);
        this.status = DatabaseStatus.READY;
        res();
      };
    });
  }
}
