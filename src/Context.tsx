import {
  Component,
  Context,
  ParentProps,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import OpeningGraph from "~/OpeningGraph";
import { Repertoire } from "~/Repertoire";
import UserManager from "~/UserMananger";
import { Engine } from "./Engine";
import { UIManager } from "./data/UIManager";
import ThemeManager from "./data/ThemeManager";

const context = {
  userManager: new UserManager(),
  openingGraph: new OpeningGraph(),
  repertoire: new Repertoire(),
  engine: new Engine(),
  ui: new UIManager(),
  themeManager: new ThemeManager(),
};

const SaknotoContext: Context<SaknotoContextKind> = createContext(context);

export interface SaknotoContextKind {
  userManager: UserManager;
  openingGraph: OpeningGraph;
  repertoire: Repertoire;
  engine: Engine;
  ui: UIManager;
  themeManager: ThemeManager;
}

export const useSaknotoContext = (): SaknotoContextKind => {
  return useContext(SaknotoContext);
};

export const SaknotoProvider: Component<ParentProps> = (props) => {
  return (
    <SaknotoContext.Provider value={context}>
      {props.children}
    </SaknotoContext.Provider>
  );
};
