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
import { Game } from "~/Game";
import { GameProvider, useGame } from "~/GameProvider";
import { RepCard } from "~/Repertoire";
import { StudySession } from "~/StudySession";
import { STARTING_FEN } from "~/constants";
import { getTurn, parse_move, san_to_lan, toDests } from "~/utils";

const Study: Component = () => {
  let game: Game | undefined;

  const context = useSaknotoContext();
  let session: StudySession = new StudySession();
  const chess = new Chess();
  const [flashcard, setFlashcard] = createSignal<RepCard | null>(null);

  const [status, setStatus] = createSignal("");
  const [attempts, setAttempts] = createSignal(0);
  const [progress, setProgress] = createSignal<any>(null);

  const getNextCard = () => {
    if (session) {
      const c = session.getCard();
      if (c) {
        chess.load(c?.fen);
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
      game?.loadPosition(flashcard()?.fen);
    }),
  );

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
      game?.drawArrowsFen(flashcard()?.fen, flashcard()?.response);
      setTimeout(() => {
        getNextCard();
        game?.drawArrowsFen(flashcard()?.fen, flashcard()?.response);
      }, 1000);
    }
  };

  onMount(async () => {
    if (!context.repertoire.ready()) {
      await context.repertoire.load();
    }
    session.load(context.repertoire);
    await session.refresh();
    getNextCard();
    setProgress(session.getProgress());
    context.ui.sidebar.set({ active: false });
  });

  const setupGame = (g: Game) => {
    game = g;
    game.subscribe(({ fen, history }) => {
      const move = history.at(-1);
      if (move && fen !== flashcard()?.fen) {
        handle_move(move);
      }
    });
  };

  return (
    <GameProvider game_id="flashcards" onGame={setupGame}>
      <div class="flex flex-col md:flex-row grow gap-4 py-8 md:justify-center relative bg-lum-50 w-full">
        <Show when={flashcard()}>
          <BoardView responsive={true} />
          <div class="bg-lum-300 border  border-lum-300 h-auto   text-lum-800 rounded overflow-hidden p-3 w-full md:w-auto md:self-start order-first md:order-2">
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
              class="font-medium p-2"
              style={{
                color: status() === "incorrect" ? "salmon" : "mediumseagreen",
              }}
            >
              {status().length > 0 ? status() : "---"}
            </div>
            <div class="p-2 font-medium">
              {attempts() > 1
                ? "hint: " + flashcard()?.response.toString()
                : "---"}
            </div>
          </div>
        </Show>
        <Show when={!flashcard()}>
          <div class="font-medium text-lum-700 p-4 rounded border border-lum-400 bg-lum-200 mt-8">
            All done for today!
          </div>
        </Show>
      </div>
    </GameProvider>
  );
};

export default Study;
