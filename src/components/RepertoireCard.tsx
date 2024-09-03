import { Button } from "@kobalte/core/button";
import {
  Component,
  For,
  Show,
  createEffect,
  createSignal,
  onMount,
} from "solid-js";
import { useSaknotoContext } from "~/Context";
import { Evaluation } from "~/Engine";
import { Game } from "~/Game";
import { useGame } from "~/GameProvider";

const RepertoireCard: Component = (props) => {
  const context = useSaknotoContext();
  const game = useGame();
  const [responses, setResponses] = createSignal([]);
  const [evaluation, setEvaluation] = createSignal<Evaluation | null>(null);
  const [fen, setFen] = createSignal(null);
  const [bestMove, setBestMove] = createSignal<string | null>(undefined);

  createEffect(async () => {
    await update(fen());
  });

  createEffect(() => {
    const f = fen();
    const e = evaluation();
    if (!e || !f) {
      setBestMove(undefined);
      return;
    }

    if (e.fen !== f) {
      setBestMove(undefined);
      return;
    }

    const move = e.lines.at(0)?.san.at(0);
    setBestMove(move);
  });

  const update = async (fen: string | undefined) => {
    if (fen) {
      const res = await context.repertoire.getLine(fen);
      setResponses(res?.response ?? []);
    }
  };

  onMount(() => {
    context.engine.onBoardEvaluation((ev) => {
      setEvaluation(ev);
    });
    game.subscribe(({ fen }) => {
      setFen(fen);
    });
  });
  const add_line = () => {
    game.setRepertoireMode();
  };

  const add_engine_line = () => {
    const move = bestMove();
    const f = fen();
    if (f && move) {
      context.repertoire.addLine(f, move);
      setTimeout(() => {
        update(fen());
        game?.checkIfComputerMove();
      }, 200);
    }
  };

  const addArrow = (move: string | undefined) => {
    if (!move) {
      return;
    }
    if (game && bestMove()) {
      game.drawArrowsFen(fen(), [move]);
    }
  };

  return (
    <div class="bg-lum-100 rounded min dark:border-accent-700 border text-accent-800 dark:text-accent-100 grow">
      <div class="bg-lum-200 py-1 px-2  font-medium">Repertoire</div>
      <div class="p-2">
        <div class="flex flex-col gap-2 items-start">
          <Button
            onClick={() => add_line()}
            class="button bg-lum-200 border-lum-300"
          >
            + add response
          </Button>
          <Button
            class="button bg-lum-200 border-lum-300 flex items-center gap-2"
            onmouseenter={() => {
              addArrow(bestMove());
            }}
            onmouseleave={() => {
              game.clearArrows();
            }}
            onClick={() => add_engine_line()}
          >
            <div>+ add top engine line </div>
            <Show
              when={bestMove() !== undefined}
              fallback={() => (
                <div class="animate-pulse test-lum-500">- - -</div>
              )}
            >
              {bestMove()}
            </Show>
          </Button>
        </div>
        <For each={responses()}>
          {(item, index) => (
            <div
              class="font-semibold p-2 bg-lum-200 hover:bg-lum-300 hover:cursor-pointer my-2 rounded hoverable"
              onmouseenter={() => {
                setTimeout(() => {
                  addArrow(item);
                }, 100);
              }}
              onmouseleave={() => {
                game.clearArrows();
              }}
              onclick={() => game?.playMove(item)}
            >
              {item}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
export default RepertoireCard;
