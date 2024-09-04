import { Component } from "solid-js";

interface BottomBarContent {
  id: number;
  content: Component;
  priority: number;
}

export class BottomBarController {
  content: Map<number, BottomBarContent>;
  counter: number;
  listeners: any[];

  constructor() {
    this.counter = 0;
    this.content = new Map();
    this.listeners = [];
  }

  set(content: Component, priority: number): number {
    const id = this.counter;
    this.counter += 1;

    this.content.set(id, {
      id,
      content,
      priority,
    });

    return id;
  }

  unset(id: number) {
    this.content.delete(id);
  }

  onContent(callback: (arg0: Component) => any) {
    this.listeners.push(callback);
    this.emit();
  }

  emit() {
    const items = [...this.content.values()];
    items.sort((a, b) => b.priority - a.priority);
    const content = items.at(0);
    if (!content) {
      return;
    }

    for (const callback of this.listeners) {
      callback(content.content);
    }
  }
}
