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
    <div class="flex min-h-0 shrink pb-4 px-4 dark:bg-accent-950 bg-accent-50 sn-main ">
      <div class="flex sk-fit shrink overflow-visible sn-opening-card">
        <OpeningCard
          pgn={history()}
          on_select={(move) => game.handle_move(move)}
        />
      </div>
      <BoardView
        class={`sn-board-view ${isRepState() ? "border-4 border-red-500 -ml-2 -mt-0.5" : ""}`}
        game={game}
        rounded={true}
      />
      <div class="flex flex-col gap-4 w-[500px] h-[100%] min-h-0 shrink px-4 sn-info-card">
        <EngineCard />
        <RepertoireCard fen={fen()} requestLine={() => setIsRepState(true)} />
        <ExplorerCard fen={fen()} playerColor="white" />
        <Button class="button" onClick={() => game.restart()}>
          Restart
        </Button>
        <Button class="button" onClick={() => game.play_common_move()}>
          Play
        </Button>
      </div>
    </div>
  );
};

export default PlayPage;
