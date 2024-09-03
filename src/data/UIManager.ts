import { STARTING_FEN } from "~/constants";

export class ComponentManager<Type> {
  data: Type;
  active: boolean;
  listeners: ((arg0: { active: boolean } & Type) => any)[] = [];

  constructor(initial: Type) {
    this.data = initial;
    this.active = false;
  }

  set(updatedData: Partial<Type>) {
    this.data = { ...this.data, ...updatedData };
    this.emit();
  }

  emit() {
    for (const callback of this.listeners) {
      callback({ active: this.active, ...this.data });
    }
  }

  on(callback: (argo0: { active: boolean } & Type) => any) {
    this.listeners.push(callback);
    this.emit();
  }

  activate() {
    this.active = true;
    this.emit();
  }
  deactivate() {
    this.active = false;
    this.emit();
  }
  toggle() {
    this.active = !this.active;
    this.emit();
  }
}

export interface SideBarState {
  active: boolean;
  view: "user" | "board" | "theme";
  data: any;
}

export class UIManager {
  board = new ComponentManager<{ active: boolean; fen: string }>({
    active: false,
    fen: STARTING_FEN,
  });

  sidebar = new ComponentManager<SideBarState>({
    active: false,
    view: "user",
    data: undefined,
  });

  mobilenav = new ComponentManager(undefined);
}
