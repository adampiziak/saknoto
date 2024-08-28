import { createContext, ParentComponent, useContext } from "solid-js";
import { Game } from "./Game";
import { useSaknotoContext } from "./Context";

const GameContext = createContext<Game>();

export const useGame = (): Game => {
  const g = useContext(GameContext);

  return g!;
};

export const GameProvider: ParentComponent = (props) => {
  const context = useSaknotoContext();
  const game = new Game(context);
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};
