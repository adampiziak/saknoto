export interface SubscriberNode {
  id: number;
  callback: any;
}

export class SubscriberManager {
  subscribers: SubscriberNode[];
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

  add(callback: any) {
    const node: SubscriberNode = {
      id: this.nextId,
      callback,
    };

    this.subscribers.push(node);
    this.nextId += 1;
    return () => {
      this.remove(node.id);
    };
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

export function Subscriber(target: any) {
  let count = 0;
  target.prototype.incrementCounter = function () {
    count++;
  };

  const originalConstructor = target;

  function newConstructor(...args: any[]) {
    return new originalConstructor(...args);
  }
  newConstructor.prototype = originalConstructor.prototype;

  return newConstructor;
}
