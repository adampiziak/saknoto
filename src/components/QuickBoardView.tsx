import { Api } from "chessground/api";
import { createEffect, createSignal, on, onMount } from "solid-js";
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
import { STARTING_FEN } from "~/constants";
import { DrawShape } from "chessground/draw";

export default function QuickBoard() {
  const context = useSaknotoContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  const game = new Chess();
  const [history, setHistory] = createSignal<string[]>([]);
  let historyPos = 0;

  const [boardFen, setBoardFen] = createSignal(startingFen());
  const [playerColor, setColor] = createSignal<"white" | "black">("white");
  const [isRepState, setIsRepState] = createSignal(false);
  const [searchParams, setParams] = useSearchParams();

  const keyevent = useKeyDownEvent();
  const params = useParams();
  const [active, setActive] = createSignal(false);
  const [engineMoves, setEngineMoves] = createSignal([]);
  const [startingPosition, setStartingPosition] = createSignal(STARTING_FEN);

  onMount(async () => {
    await context.engine.wait();
    context.engine.onBoardEvaluation((evl) => {
      setEngineMoves(
        evl.lines.map((l) => ({
          orig: l.lan.at(0)?.slice(0, 2),
          dest: l.lan.at(0)?.slice(2, 4),
          score: l.score,
        })),
      );
    });

    context.ui.sidebar.on((data) => {
      setActive(data.active);
      if (data.active) {
        game.load(data.data);
        setStartingPosition(data.data);
        const color = game.turn() === "w" ? "white" : "black";
        setColor(color);
        updateBoardState();
      }
    });
  });

  createEffect(
    on(engineMoves, () => {
      const moves = engineMoves();
      console.log(moves);

      const arrows: DrawShape[] = moves.map((m) => ({
        orig: m.orig,
        dest: m.dest,
        brush: "paleGrey",

        modifiers: {
          lineWidth: Math.min(
            Math.max(2, Math.abs(Math.round(m.score * 10))),
            10,
          ),
        },
      }));

      api()?.set({
        drawable: {
          autoShapes: arrows,
        },
      });
    }),
  );

  createEffect(
    on(keyevent, () => {
      const e = keyevent();
      if (!e) {
        return;
      }

      if (e.key === "Escape") {
        context.ui.board.set({ active: false, fen: STARTING_FEN });
      }

      if (e.key === "ArrowLeft") {
        const hmoves = history().slice(0, Math.max(0, historyPos));
        historyPos = Math.max(-1, historyPos - 1);

        game.reset();
        game.load(startingPosition());
        for (const m of hmoves) {
          game.move(m);
        }
        updateBoardState();
      }
      if (e.key === "ArrowRight") {
        historyPos = Math.min(history().length - 1, historyPos + 1);
        const hmoves = history().slice(0, historyPos + 1);

        game.reset();
        game.load(startingPosition());
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
    console.log("requesting");
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
    <div class="flex p-4 w-[1200px] gap-4">
      <BoardView
        setApi={initializeApi}
        class={`max-h-[70%] min-w-[50%] ${isRepState() ? "border-4 border-red-500" : ""}`}
      />
      <div class="tools-container justify-start flex flex-grow shrink flex-col *:shrink gap-4 max-w-[500px] min-w-[300px] max-h-full overflow-auto">
        <Button
          onClick={() => context.ui.sidebar.set({ active: false })}
          class="lvl-1 hoverable"
        >
          Close
        </Button>
        <div>
          <a
            class="p-2 border rounded lvl-2 hoverable"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://lichess.org/analysis/${boardFen()}`}
          >
            open lichess
          </a>
        </div>
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
    </div>
  );
}
