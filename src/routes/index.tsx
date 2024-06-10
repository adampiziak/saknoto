import { Api } from "chessground/api";
import { For, createEffect, createSignal, onMount } from "solid-js";
import { BoardView } from "~/BoardView";
import * as cg from "chessground/types";
import { Chess } from "chess.js";
import { toDests } from "~/utils";
import { useSakarboContext } from "~/Context";
import { Button } from "@kobalte/core/button";

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
        setMoves(Object.entries(e.moves).toSorted((a, b) => b[1] - a[1]));
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

  const getMoves = () => {
    const color = game.turn() === "w" ? "white" : "black";
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

  const reset = () => {
    game.reset();
    getMoves();
    api()?.set({
      fen: game.fen(),
      turnColor: "white",
      movable: {
        color: "white",
        free: false,
        dests: toDests(game),
      },
    });
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
    <main class="flex flex-grow px-8 gap-6 py-6 justify-center">
      <BoardView setApi={initializeApi} class="" />
      <div class="tools-container justify-center flex-grow flex  flex-col *:shrink gap-6 max-w-[600px] min-w-[300px]">
        <div class="card">
          <div class="card-title">engine</div>
        </div>
        <div class="card">
          <div class="card-title">settings</div>
          <Button class="button" onClick={() => reset()}>
            restart
          </Button>
        </div>
        <div class="card grow-0 shrink">
          <div class="card-title">repertoire</div>
        </div>
        <div class="card shrink">
          <div class="card-title">explorer</div>
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
