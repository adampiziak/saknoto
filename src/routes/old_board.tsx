import { Api } from "chessground/api";
import {
  Component,
  For,
  createEffect,
  createSignal,
  on,
  onMount,
} from "solid-js";
import { BoardView } from "~/BoardView";
import * as cg from "chessground/types";
import { Chess } from "chess.js";
import { parse_move, startingFen, toDests } from "~/utils";
import { useSaknotoContext } from "~/Context";
import { Button } from "@kobalte/core/button";
import EngineCard from "~/components/EngineCard";
import { Evaluation, createEmptyEvaluation } from "~/Engine";
import ExplorerCard from "~/components/ExplorerCard";
import GameInterfaceCard from "~/components/GameInterfaceCard";
import RepertoireCard from "~/components/RepertoireCard";
import { useKeyDownEvent } from "@solid-primitives/keyboard";
import { useParams, useSearchParams } from "@solidjs/router";

export default function Board() {
  const context = useSaknotoContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  const game = new Chess();
  const [history, setHistory] = createSignal<string[]>([]);
  let historyPos = 0;

  const [boardFen, setBoardFen] = createSignal(startingFen());
  const [playerColor, setColor] = createSignal<"white" | "black">("white");
  const [isRepState, setIsRepState] = createSignal(false);
  const [params, setParams] = useSearchParams();

  const keyevent = useKeyDownEvent();

  onMount(async () => {
    if (params.fen) {
      setTimeout(() => {
        game.load(params.fen);
        updateBoardState();
      }, 100);
    } else {
      updateBoardState();
    }
  });

  createEffect(
    on(keyevent, () => {
      const e = keyevent();
      if (!e) {
        return;
      }

      if (e.key === "ArrowLeft") {
        const hmoves = history().slice(0, Math.max(0, historyPos));
        historyPos = Math.max(-1, historyPos - 1);

        game.reset();
        for (const m of hmoves) {
          game.move(m);
        }
        updateBoardState();
      }
      if (e.key === "ArrowRight") {
        historyPos = Math.min(history().length - 1, historyPos + 1);
        const hmoves = history().slice(0, historyPos + 1);

        game.reset();
        for (const m of hmoves) {
          game.move(m);
        }
        updateBoardState();
      }
    }),
  );

  const updateBoardState = () => {
    const fen = game.fen();
    console.log(fen);
    context.engine.setBoardPosition(fen);
    setBoardFen(fen);
    const color = game.turn() === "w" ? "white" : "black";
    api()?.set({
      turnColor: color,
      orientation: playerColor(),
      fen: game.fen(),
      movable: {
        color,
        free: false,
        dests: toDests(game),
      },
    });
  };

  const movePiece = (san: string) => {
    const fen = game.fen();
    try {
      game.move(san);
    } catch {
      game.load(fen);
    }

    setHistory(game.history());
    historyPos = history().length - 1;
    updateBoardState();
  };

  const moveListener = (orig: cg.Key, dest: cg.Key) => {
    const move = orig + dest;
    const fen = game.fen();
    const m = parse_move(fen, move);
    if (!m) {
      return;
    }

    if (isRepState()) {
      context.repertoire.add(fen, m);
      setIsRepState(false);
      return;
    }

    movePiece(m);
  };

  const reset = () => {
    console.log("reset");
    game.reset();
    setHistory(game.history());
    historyPos = -1;
    updateBoardState();
  };

  createEffect(() => {
    api()?.set({
      orientation: playerColor(),
      movable: {
        color: "white",
        dests: toDests(game),
        events: {
          after: moveListener,
        },
      },
    });
  });

  return (
    <main class="flex flex-grow px-8 gap-6 py-6 justify-center relative ">
      <BoardView
        setApi={initializeApi}
        class=""
        style={{ border: isRepState() ? "3px solid red" : "" }}
      />
      <div class="tools-container justify-start flex flex-grow shrink flex-col *:shrink gap-4 max-w-[500px] min-w-[300px] max-h-full overflow-auto">
        <EngineCard onSelect={(m) => movePiece(m)} />
        <GameInterfaceCard
          history={history}
          restart={() => reset()}
          setOrientation={setColor}
        />
        <RepertoireCard
          fen={boardFen()}
          requestLine={() => setIsRepState(true)}
        />
        <ExplorerCard
          fen={boardFen()}
          playerColor={playerColor()}
          onSelect={(m) => movePiece(m)}
        />
      </div>
    </main>
  );
}
