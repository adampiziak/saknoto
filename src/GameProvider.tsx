import {
  Accessor,
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  ParentComponent,
  useContext,
} from "solid-js";
import { Game } from "./Game";
import { useSaknotoContext } from "./Context";
import { useLocation } from "@solidjs/router";

export type GameOption = Game | undefined;
export type GameGetter = Accessor<Game>;

const GameContext = createContext<Accessor<Game>>();

export const useGame = (): Accessor<Game> => {
  const g = useContext(GameContext);

  return g!;
};

export const GameProvider: ParentComponent<{
  game_id?: string;
  onGame?: (g: Accessor<Game | undefined>) => any;
}> = (props) => {
  const context = useSaknotoContext();
  const [game, setGame] = createSignal<Game>(
    new Game(context, props.game_id ?? null),
  );

  const location = useLocation();

  createEffect(() => {
    location.pathname;
    game().reset();
  });

  onMount(() => {
    if (props.onGame) {
      props.onGame(game);
    }
  });

  onCleanup(() => {
    setGame(undefined!);
  });

  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};
