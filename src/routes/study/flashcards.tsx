import { Chess } from "chess.js";
import { Api } from "chessground/api";
import { DrawShape } from "chessground/draw";
import { Key } from "chessground/types";
import {
  Component,
  Show,
  createEffect,
  createSignal,
  on,
  onMount,
} from "solid-js";
import { Rating } from "ts-fsrs";
import { BoardView } from "~/BoardView";
import { useSaknotoContext } from "~/Context";
import { RepCard } from "~/Repertoire";
import { StudySession } from "~/StudySession";
import { STARTING_FEN } from "~/constants";
import { getTurn, parse_move, san_to_lan, toDests } from "~/utils";

const Study: Component = (_props: any) => {
  const context = useSaknotoContext();
  let session: StudySession | null = null;
  const game = new Chess();
  const [flashcard, setFlashcard] = createSignal<RepCard | null>(null);
  const [api, initializeApi] = createSignal<Api | null>(null);

  const [status, setStatus] = createSignal("");
  const [attempts, setAttempts] = createSignal(0);
  const [progress, setProgress] = createSignal(null);

  const getNextCard = () => {
    if (session) {
      const c = session.getCard();
      if (c) {
        game.load(c?.fen);
        setFlashcard({ ...c });
      } else {
        setFlashcard(null);
      }
    } else {
      console.log("NULL");
    }
  };

  createEffect(
    on(flashcard, () => {
      setPosition();
    }),
  );
  createEffect(
    on(attempts, () => {
      if (attempts() > 0) {
        api()?.set({
          drawable: {
            autoShapes: getArrows(),
          },
        });
      }
    }),
  );

  const getArrows = () => {
    const c = flashcard();
    if (attempts() > 0 && c) {
      const arrows: DrawShape[] = [];
      for (const r of c.response) {
        const { orig, dest } = san_to_lan(c.fen, r);

        arrows.push({
          orig,
          dest,
          brush: "green",
        });
      }

      return arrows;
    }

    return [];
  };

  const setPosition = () => {
    const fen = flashcard()?.fen ?? STARTING_FEN;
    game.load(fen);
    const turn = game.turn() === "w" ? "white" : "black";
    api()?.set({
      fen,
      orientation: turn,
      turnColor: turn,
      movable: {
        color: turn,
        free: false,
        dests: toDests(game),
      },
      drawable: {
        autoShapes: attempts() > 0 ? getArrows() : [],
      },
    });
  };

  const handle_move = (san: string) => {
    const c = flashcard();
    if (!c) {
      return;
    }

    if (c.response.includes(san)) {
      console.log("correct");
      setStatus("correct!");
      session?.practiceCard(c, Rating.Good);
      setProgress(session?.getProgress());
      setTimeout(() => {
        setStatus("");
        setAttempts(0);
        getNextCard();
      }, 1000);
    } else {
      console.log("incorrect");
      setStatus("incorrect");
      setAttempts((prev) => prev + 1);
      session?.practiceCard(c, Rating.Again);
      setProgress(session?.getProgress());
      setTimeout(() => {
        getNextCard();
      }, 1000);
    }
  };

  createEffect(
    on(api, () => {
      api()?.set({
        movable: {
          events: {
            after: (orig: Key, dest: Key) => {
              const move = parse_move(game.fen(), `${orig}${dest}`);
              handle_move(move);
            },
          },
        },
      });
      setPosition();
    }),
  );
  onMount(async () => {
    if (!context.repertoire.ready()) {
      await context.repertoire.load();
    }
    session = new StudySession(context.repertoire);
    await session.refresh();
    getNextCard();
    setProgress(session.getProgress());
    context.ui.sidebar.set({ active: false });
  });

  return (
    <div class="flex-grow flex px-24 gap-4 py-8 items-start justify-center relative dark:bg-accent-950 bg-accent-50">
      <Show when={flashcard()}>
        <BoardView setApi={initializeApi} class="h-full z-20 relative" />
        <div class="bg-lum-200 border  border-lum-300 h-auto w-[400px]  text-lum-800 rounded overflow-hidden p-3">
          <Show when={progress()}>
            <div class="flex gap-4 font-bold">
              <div class="text-red-400">{progress().todo}</div>
              <div class="text-yellow-500">{progress().doing}</div>
              <div class="text-blue-400">{progress().done}</div>
            </div>
          </Show>
          <Show
            when={flashcard()}
            fallback={
              <div class="p-2 text-lum-800 bg-lum-500">done for today!</div>
            }
          >
            <div class="mt-1 text-accent-800 dark:text-accent-100">
              {flashcard()?.card?.due.toLocaleString()}
            </div>
          </Show>
          <div
            class="font-medium"
            classList={{
              "p-2": status().length > 0,
            }}
            style={{
              color: status() === "incorrect" ? "salmon" : "mediumseagreen",
            }}
          >
            {status()}
          </div>
          <Show when={attempts() > 1}>
            <div class="p-2 font-medium">
              hint: {flashcard()?.response.toString()}
            </div>
          </Show>
        </div>
      </Show>
      <Show when={!flashcard()}>
        <div class="font-medium text-lum-700 p-4 rounded border border-lum-400 bg-lum-200 mt-8">
          All done for today!
        </div>
      </Show>
    </div>
  );
};

export default Study;
