import { STARTING_FEN } from "~/constants";

export class ComponentManager<Type> {
  data: Type;
  listeners: ((arg0: Type) => any)[] = [];

  constructor(initial: Type) {
    this.data = initial;
  }

  set(updatedData: Partial<Type>) {
    this.data = { ...this.data, ...updatedData };

    for (const callback of this.listeners) {
      callback(this.data);
    }
  }

  on(callback: (argo0: Type) => any) {
    this.listeners.push(callback);
    callback(this.data);
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

  mobilenav = new ComponentManager<{ active: boolean }>({ active: false });
}
