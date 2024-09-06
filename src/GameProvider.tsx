import {
  createContext,
  onCleanup,
  onMount,
  ParentComponent,
  useContext,
} from "solid-js";
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
  let game = new Game(context, props.game_id ?? null);

  onMount(() => {
    if (props.onGame) {
      props.onGame(game);
    }
  });

  onCleanup(() => {
    console.log("GAME CLEANUP");
    game.cleanup();
    game = undefined;
  });

  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};
