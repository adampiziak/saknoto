import { createContext, onMount, ParentComponent, useContext } from "solid-js";
import { Game } from "./Game";
import { useSaknotoContext } from "./Context";

const GameContext = createContext<Game>();

export const useGame = (): Game => {
  const g = useContext(GameContext);

  return g!;
};

export const GameProvider: ParentComponent<{
  game_id?: string;
  onGame?: (g: Game) => any;
}> = (props) => {
  const context = useSaknotoContext();
  const game = new Game(context, props.game_id ?? null);

  onMount(() => {
    if (props.onGame) {
      props.onGame(game);
    }
  });
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};
