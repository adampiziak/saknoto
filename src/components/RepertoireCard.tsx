import { Button } from "@kobalte/core/button";
import { Component, For, createEffect, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { Game } from "~/Game";
import { useGame } from "~/GameProvider";

const RepertoireCard: Component = (props) => {
  const context = useSaknotoContext();
  const game = useGame();
  const [responses, setResponses] = createSignal([]);
  const [evl, setEvl] = createSignal(null);
  const [fen, setFen] = createSignal(null);

  createEffect(async () => {
    await update(fen());
  });

  const update = async (fen: string | undefined) => {
    if (fen) {
      const res = await context.repertoire.getLine(fen);
      setResponses(res?.response ?? []);
    }
  };

  onMount(() => {
    context.engine.subscribe_main((ev) => {
      setEvl(ev?.lines.at(0)?.san.at(0) ?? null);
    });
    game.subscribe(({ fen }) => {
      setFen(fen);
    });
  });
  const add_line = () => {
    game.setRepertoireMode();
  };

  const add_engine_line = () => {
    let rep: string | null = evl();
    if (rep !== null && rep.length > 0 && fen() != undefined) {
      context.repertoire.addLine(fen(), rep);
      setTimeout(() => {
        update(fen());
        game?.checkIfComputerMove();
      }, 500);
    }
  };

  let arrows = new Set<string>();
  const addArrow = (move: string) => {
    arrows.add(move);
    if (game) {
      game.drawArrows([...arrows.values()]);
    }
  };
  const removeArrow = (move: string) => {
    arrows.delete(move);
    if (game) {
      game.drawArrows([...arrows.values()]);
    }
  };

  return (
    <div class="bg-lum-100 rounded min dark:border-accent-700 border text-accent-800 dark:text-accent-100">
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
            class="button bg-lum-200 border-lum-300"
            onmouseenter={() => {
              if (evl()) {
                addArrow(evl());
              }
            }}
            onmouseleave={() => {
              if (evl()) {
                removeArrow(evl());
              }
            }}
            onClick={() => add_engine_line()}
          >
            + add top engine line {evl()}
          </Button>
        </div>
        <For each={responses()}>
          {(item, index) => (
            <div
              class="font-semibold p-2 bg-lum-200 hover:bg-lum-300 hover:cursor-pointer my-2 rounded hoverable"
              onmouseenter={() => {
                addArrow(item);
              }}
              onmouseleave={() => {
                removeArrow(item);
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
