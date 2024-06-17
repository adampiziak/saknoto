import { Api } from "chessground/api";
import { Component, For, createEffect, createSignal, onMount } from "solid-js";
import { BoardView } from "~/BoardView";
import * as cg from "chessground/types";
import { Chess } from "chess.js";
import { toDests } from "~/utils";
import { useSakarboContext } from "~/Context";
import { Button } from "@kobalte/core/button";
import EngineCard from "~/components/EngineCard";
import { Evaluation, createEmptyEvaluation } from "~/Engine";

export default function Home() {
  const context = useSakarboContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  const game = new Chess();

  const [moves, setMoves] = createSignal([]);
  const [evl, setEval] = createSignal<Evaluation>(createEmptyEvaluation());

  onMount(async () => {
    await context.openingGraph.load_wait();
    await context.openingGraph
      .getFen(game.fen(), "white", "white")
      .then((position_moves) => {
        setMoves(position_moves);
      });

    context.engine.subscribe_main((evaluation) => {
      setEval(evaluation);
    });

    await context.engine.wait();
    configurePosition();
  });

  const configurePosition = () => {
    const fen = game.fen();
    const color = game.turn() === "w" ? "white" : "black";
    context.engine.add_task(fen);
    context.openingGraph
      .getFen(fen, "white", color)
      .then((e) => {
        setMoves(e);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMove = (orig: cg.Key, dest: cg.Key) => {
    const move = orig + dest;
    game.move(move);
    context.engine.add_task(game.fen());
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
          setMoves(e);
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
      <div class="tools-container justify-start flex-grow flex  flex-col *:shrink gap-4 max-w-[500px] min-w-[300px]">
        <EngineCard evaluation={evl()} />
        <ExplorerCard moves={moves()} />
      </div>
    </main>
  );
}

const SettingsCard: Component = (props) => {
  return (
    <div class="lvl-1">
      <div class="card-title">settings</div>
      <Button class="button" onClick={() => reset()}>
        restart
      </Button>
    </div>
  );
};

const RepertoireCard: Component = (props) => {
  return (
    <div class="card grow-0 shrink">
      <div class="card-title">repertoire</div>
    </div>
  );
};

// const EngineCard: Component = (props) => {
//   const line = (l) => {
//     const score = l.cp / 100;
//     const rounded_score = Math.round(score * 10) / 10;
//     let sign = " ";
//     if (score > 0) {
//       sign = "+";
//     }
//     if (score < 0) {
//       sign = "-";
//     }

//     const score_string = `${sign}${Math.abs(rounded_score)}`;
//     return (
//       <div class="lvl-1 hoverable sk-list-item  py-2 px-2 flex gap-4 items-center">
//         <div class="w-8 font-semibold text-right">{score_string}</div>
//         <div>{l.moves}</div>
//       </div>
//     );
//   };
//   return (
//     <div class="card lvl-1 border">
//       <div class="lvl-1 border-b">
//         <For each={props.evl?.pvs ?? []}>{(item, index) => line(item)}</For>
//       </div>
//       <div class="lvl-2  py-1 px-2 text-right font-medium">
//         depth: {props.evl?.depth}
//       </div>
//     </div>
//   );
// };

const ExplorerCard: Component = (props) => {
  return (
    <div class="lvl-1 card border">
      <div class="lvl-2 py-1 font-medium">
        <div>
          <span class="inline-block w-14 text-right mr-4">move</span>
          <span>games</span>
        </div>
      </div>
      <div class="flex flex-col">
        <For each={props.moves}>
          {(item, index) => (
            <div class="lvl-1 hoverable sk-list-item py-2">
              <span class="inline-block w-14 text-right mr-4">{item[0]} </span>
              {item[1]}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
