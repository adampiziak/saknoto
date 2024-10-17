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
import Theme from "./lib/Theme";
import { BottomBarController } from "./lib/BottomBarController";

const context = {
  userManager: new UserManager(),
  openingGraph: new OpeningGraph(),
  repertoire: new Repertoire(),
  engine: new Engine(),
  ui: new UIManager(),
  themeManager: new Theme(),
  bottomBarController: new BottomBarController(),
};

const SaknotoContext: Context<SaknotoContextKind> = createContext(context);

export interface SaknotoContextKind {
  userManager: UserManager;
  openingGraph: OpeningGraph;
  repertoire: Repertoire;
  engine: Engine;
  ui: UIManager;
  themeManager: Theme;
  bottomBarController: BottomBarController;
}

export const useTheme = (): Theme => {
  return useContext(SaknotoContext).themeManager;
};

export const useBottomBar = (): BottomBarController => {
  return useContext(SaknotoContext).bottomBarController;
};

export const useSaknotoContext = (): SaknotoContextKind => {
  return useContext(SaknotoContext);
};

export const useUserInterface = (): UIManager => {
  return useContext(SaknotoContext).ui;
};

export const SaknotoProvider: Component<ParentProps> = (props) => {
  return (
    <SaknotoContext.Provider value={context}>
      {props.children}
    </SaknotoContext.Provider>
  );
};
