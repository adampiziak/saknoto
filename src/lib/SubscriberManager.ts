export interface SubscriberNode<T> {
  id: number;
  callback: (val: T) => any;
}

export class SubscriberManager<T> {
  subscribers: SubscriberNode<T>[];
  nextId: number;

  constructor() {
    this.subscribers = [];
    this.nextId = 0;
  }

  remove(id: number) {
    this.subscribers = this.subscribers.filter((n) => n.id != id);
  }

  clear() {
    this.subscribers = [];
  }

  on(callback: (val: T) => any) {
    const node: SubscriberNode<T> = {
      id: this.nextId,
      callback,
    };

    this.subscribers.push(node);
    this.nextId += 1;
    return () => {
      this.remove(node.id);
    };
  }

  emit(val: T) {
    for (const node of this.subscribers) {
      node.callback(val);
    }
  }

  all() {
    return this.subscribers.map((n) => n.callback);
  }
}

type Construtor = new (...args: any[]) => {};

export function SubscriberManagerMixin<TBase extends Construtor>(Base: TBase) {
  return class SubMag extends Base {
    _subscribers: SubscriberNode[] = [];
    _counter: number = 0;

    subscribe(callback: any) {
      this._subscribers.push({ id: this._counter++, callback });
    }

    unsubscribe(id: number) {
      this._subscribers = this._subscribers.filter((n) => n.id !== id);
    }

    unsubscribeAll() {
      this._subscribers = [];
    }

    emit(val: any) {
      for (const node of this._subscribers) {
        node.callback(val);
      }
    }
  };
}

export function Subscriber<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    reportingURL = "hey";
  };
}
