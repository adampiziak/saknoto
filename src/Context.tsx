import {
  Component,
  Context,
  ParentProps,
  createContext,
  useContext,
} from "solid-js";
import OpeningGraph from "~/OpeningGraph";
import { Repertoire } from "~/Repertoire";
import UserManager from "~/UserMananger";
import { Engine } from "./Engine";

const context = {
  userManager: new UserManager(),
  openingGraph: new OpeningGraph(),
  repertoire: new Repertoire(),
  engine: new Engine(),
};

const SakarboContext: Context<Sakarbo> = createContext(context);

export interface Sakarbo {
  userManager: UserManager;
  openingGraph: OpeningGraph;
  repertoire: Repertoire;
  engine: Engine;
}

export const useSakarboContext = (): Sakarbo => {
  return useContext(SakarboContext);
};

export const SakarboProvider: Component<ParentProps> = (props) => {
  return (
    <SakarboContext.Provider value={context}>
      {props.children}
    </SakarboContext.Provider>
  );
};
