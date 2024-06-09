import { Api } from "chessground/api";
import { For, createEffect, createSignal, onMount } from "solid-js";
import { BoardView } from "~/BoardView";
import * as cg from "chessground/types";
import { Chess } from "chess.js";
import { toDests } from "~/utils";
import { useSakarboContext } from "~/Context";

export default function Home() {
  const context = useSakarboContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  const game = new Chess();

  const [moves, setMoves] = createSignal([]);

  onMount(async () => {
    await context.openingGraph.load_wait();
    await context.openingGraph
      .getFen(game.fen(), "white", "white")
      .then((e) => {
        // setMoves(Object.entries(e.moves).toSorted((a, b) => b[1] - a[1]));
      });
  });

  const handleMove = (orig: cg.Key, dest: cg.Key) => {
    const move = orig + dest;
    game.move(move);
    const color = game.turn() === "w" ? "white" : "black";

    api()?.set({
      turnColor: color,
      movable: {
        color,
        free: false,
        dests: toDests(game),
      },
    });

    console.log("ready?:" + context.openingGraph.isready());

    try {
      console.log(game.fen());
      context.openingGraph
        .getFen(game.fen(), "white", color)
        .then((e) => {
          if (e.moves) {
            console.log(e.moves);
            setMoves(Object.entries(e.moves).toSorted((a, b) => b[1] - a[1]));
            // console.log(moves());
            // console.log(e.moves.entries());
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  createEffect(() => {
    api()?.set({
      movable: {
        color: "white",
        dests: toDests(game),
        events: {
          after: handleMove,
        },
      },
    });
  });

  return (
    <main class="flex flex-grow mx-24 gap-4 justify-center">
      <BoardView setApi={initializeApi} class="" />
      <div class="tools-container justify-between flex-grow p-8 flex flex-col *:grow *:shrink gap-4 *:rounded *:bg-main-card *:p-2 max-w-[600px] min-w-[300px]">
        <div class="">engine</div>
        <div class="">rep</div>
        <div class="shrink">
          <div>explorer</div>
          <div>
            <div>
              <span class="inline-block w-24">move</span>
              <span>games</span>
            </div>
          </div>
          <For each={moves()}>
            {(item, index) => (
              <div>
                <div>
                  <span class="inline-block w-24">{item[0]} </span>
                  {item[1]}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
