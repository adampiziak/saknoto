import { Button } from "@kobalte/core/button";
import { useNavigate } from "@solidjs/router";
import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";
import { Rating } from "ts-fsrs";
import { BoardView } from "~/BoardView";
import BottomBarContent from "~/components/BottomBarContent";
import { useSaknotoContext } from "~/Context";
import { Game, UnSubKind, unsubType } from "~/Game";
import { GameGetter, GameProvider, useGame } from "~/GameProvider";
import { useMobile } from "~/lib/hooks";
import { RepCard } from "~/Repertoire";
import { StudySession } from "~/StudySession";

const Study: Component = () => {
  let game: GameGetter = useGame();

  const context = useSaknotoContext();
  let session: StudySession = new StudySession();
  const [flashcard, setFlashcard] = createSignal<RepCard | undefined>(
    undefined,
  );

  const [status, setStatus] = createSignal("");
  const [attempts, setAttempts] = createSignal(0);
  const [progress, setProgress] = createSignal<any>(null);

  const setPosition = () => {
    const fen = flashcard()?.fen;
    if (fen) {
      game()?.loadPosition(fen, true);
    }
  };

  const navigate = useNavigate();

  const openPosition = () => {
    navigate("/", {
      state: {
        fen: flashcard()?.fen,
      },
    });
  };

  const revealMove = () => {
    const fen = flashcard()?.fen;
    const response = flashcard()?.response;

    if (fen && response) {
      game()?.drawArrowsFen(fen, response);
    }
  };

  const checkMove = (san: string) => {
    const card = flashcard();
    if (!card) {
      return;
    }

    if (card.response.includes(san)) {
      setStatus("correct!");
      session.practice(Rating.Good);
      setTimeout(() => {
        getNextCard();
      }, 1000);
    } else {
      setStatus("incorrect");
      const updatedCard = session.practice(Rating.Again);
      if (updatedCard) {
        setFlashcard({ ...updatedCard });
      }
      setAttempts((prev) => prev + 1);
      revealMove();
      setTimeout(() => {
        setPosition();
        revealMove();
      }, 1000);
    }
  };

  const getNextCard = () => {
    setFlashcard(session.getCard());
    setPosition();
    setProgress(session.getProgress());
    setAttempts(0);
  };

  let unsub: UnSubKind;
  onMount(async () => {
    if (!context.repertoire.ready()) {
      await context.repertoire.load();
    }
    session.load(context.repertoire);
    await session.refresh();
    getNextCard();
    setProgress(session.getProgress());
    game()?.useEngine(false);
    game()?.unsetRepertoireMode();
    context.ui.sidebar.set({ active: false });
    unsub = game().onMove((san) => {
      checkMove(san);
    });
  });

  onCleanup(() => {
    if (unsub) {
      unsub();
    }
  });

  const mobile = useMobile();

  return (
    <div class="flex flex-col md:flex-row grow gap-4 py-8 md:justify-center md:items-start relative bg-lum-50 w-full">
      <Show when={flashcard()}>
        <BoardView responsive={true} />
        <div class="bg-lum-100 border  border-lum-200 h-auto   text-lum-800 rounded overflow-hidden p-3 w-full md:w-auto md:self-start order-first md:order-2">
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
            <div>
              <div class="mt-1 text-accent-800 dark:text-accent-100">
                {flashcard()?.card?.due.toLocaleString()}
              </div>
              <div>difficulty: {flashcard()?.card.difficulty}</div>
              <div>stability: {flashcard()?.card.stability}</div>
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
            {attempts() > 0
              ? "hint: " + flashcard()?.response.toString()
              : "---"}
          </div>
          <Button
            class="button bg-lum-200 border-lum-300 hover:bg-lum-300"
            onclick={() => openPosition()}
          >
            Open position
          </Button>
        </div>
      </Show>
      <Show when={!flashcard()}>
        <div class="font-medium text-lum-700 p-4 rounded border border-lum-400 bg-lum-200 mt-8">
          All done for today!
        </div>
      </Show>
      <BottomBarContent mode="main" />
    </div>
  );
};

export default Study;
