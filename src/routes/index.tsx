import { Button } from "@kobalte/core/button";
import {
  Component,
  createEffect,
  createSignal,
  For,
  on,
  onMount,
} from "solid-js";
// import { useSakarboContext } from "~/Context";
import { BoardView } from "~/BoardView";
import EngineCard from "~/components/EngineCard";
import ExplorerCard from "~/components/ExplorerCard";
import RepertoireCard from "~/components/RepertoireCard";
import { useSaknotoContext } from "~/Context";
import { Game } from "~/Game";
import { startingFen } from "~/utils";
import OpeningNameCard from "../../OpeningNameCard";
import OpeningCard from "~/components/OpeningCard";
import { useKeyDownEvent } from "@solid-primitives/keyboard";
import { Chess } from "chess.js";
import GameInterfaceCard from "~/components/GameInterfaceCard";
import PositionContext from "~/components/PositionContext";
import HomeDesktop from "~/components/HomeDesktop";
import HomeMobile from "~/components/HomeMobile";
// import { Game } from "~/Game";

const PlayPage: Component = () => {
  const context = useSaknotoContext();
  const game = new Game();
  const [fen, setFen] = createSignal(startingFen());
  const [history, setHistory] = createSignal<string[]>([]);
  const [openings, setOpenings] = createSignal([]);
  const [isRepState, setIsRepState] = createSignal(false);

  game.subscribe(({ fen, history }: { fen: string; history: string[] }) => {
    setFen(fen);
    setHistory([...history]);
    context.engine.enqueue_main(fen);
  });
  const keyevent = useKeyDownEvent();

  createEffect(
    on(keyevent, () => {
      const e = keyevent();
      if (!e) {
        return;
      }

      if (e.key === "Escape") {
        setIsRepState(false);
      }
    }),
  );

  createEffect(
    on(isRepState, () => {
      if (isRepState()) {
        game.get_next((nextval: any) => {
          if (isRepState()) {
            let tmp = new Chess();
            for (let m of nextval.history.slice(0, -1)) {
              tmp.move(m);
            }
            context.repertoire.addLine(tmp.fen(), nextval.history.at(-1));
            setIsRepState(false);
          }
        });
      }
    }),
  );

  return (
    <>
      <HomeDesktop game={game} />
      <HomeMobile game={game} />
    </>
  );
};

export default PlayPage;
