import { Button } from "@kobalte/core/button";
import { useNavigate } from "@solidjs/router";
import { Chess } from "chess.js";
import { BiRegularLoaderAlt } from "solid-icons/bi";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { Component, createSignal, onCleanup, onMount, Show } from "solid-js";
import { BoardView } from "~/BoardView";
import BottomBarContent from "~/components/BottomBarContent";
import EngineCard from "~/components/EngineCard";
import OpeningSelector from "~/components/OpeningSelector";
import SelectDropdown from "~/components/SelectDropdown";
import { useSaknotoContext } from "~/Context";
import { useGame } from "~/GameProvider";
import OpeningQueue from "~/lib/OpeningTrainer";
import { CandidateTodo, RepertoireQueue } from "~/lib/RepertoireWorker";
import { sleep } from "~/utils";

const RepertoirePage: Component = () => {
  let context = useSaknotoContext();
  let [todoFen, setTodoFen] = createSignal<CandidateTodo | undefined>();
  let game = useGame();
  let [loading, setLoading] = createSignal(false);
  const repQueue = new RepertoireQueue();
  const openingQueue = new OpeningQueue();
  const [needsConfirm, setNeedsConfirm] = createSignal(false);
  const options = ["worse positions", "from position"];
  const [selectedOption, setSelectedOption] = createSignal(options[1]);
  const [selectedOpening, setSelectedOpening] = createSignal({
    value: "English Opening",
    label: "English Opening",
    eco: "A10",
    name: "English Opening",
    pgn: "1. c4",
    moves: 0.5,
  });
  const navigate = useNavigate();
  const openLichessPosition = () => {
    const url = "https://lichess.org/analysis/" + todoFen()?.fen;
    window.open(url, "_blank")?.focus();
  };

  const setOpening = async (obj: any) => {
    setSelectedOpening(obj);
    await practiceOpening();
    await getNextOpeningPosition();
  };

  const practiceOpening = async () => {
    const opening = selectedOpening();
    const pgn = opening.pgn;

    const parts = pgn.split(" ");
    const moves = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        continue;
      }
      moves.push(parts[i]);
    }
    const newGame = new Chess();
    for (const m of moves) {
      newGame.move(m);
    }
    await openingQueue.load();
    await openingQueue.setStartingPosition(newGame.fen());
    await openingQueue.search();
  };
  const getNextOpeningPosition = async () => {
    const nxt = await openingQueue.next();
    if (nxt) {
      setTodoFen({ fen: nxt });
      game()?.loadPosition(nxt);
      game()?.setRepertoireMode();
      game()?.notifyEngine();
    }
  };

  const getNext = async () => {
    await repQueue.load();
    setLoading(true);
    try {
      const position = await repQueue.next();
      if (position !== undefined) {
        setTodoFen(position);
        game()?.loadPosition(position.fen);
        game()?.setRepertoireMode();
        game()?.notifyEngine();
        repQueue.startSearch();
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const [openingNames, setOpeningNames] = createSignal([]);
  // const setSelectedOpeningName = (val: any) => {
  //   console.log("selected opening:");
  //   console.log(val);
  //   setSelectedOpening(val);
  // };

  let unsubscribe: () => void | undefined;
  onMount(async () => {
    const names_res = await fetch("/openings.json");
    const names_json = await names_res.json();
    const all_names = names_json.openings.map((n: any) => ({
      value: n.name,
      label: n.name,
      disabled: false,
    }));
    console.log(all_names.length);
    console.log("hello?");

    setOpeningNames(all_names);
    // setSelectedOpening(all_names.at(0));
    unsubscribe = game().subscribe(({ fen, pendingMove }) => {
      if (pendingMove !== null) {
        setNeedsConfirm(true);
      } else {
        setNeedsConfirm(false);

        if (fen !== todoFen()?.fen) {
          setTimeout(() => {
            getNextOpeningPosition();
            // getPersonalNext();
          }, 500);
        }
      }
    });
    await sleep(1000);
    if (game() !== undefined) {
      // await repQueue.load();
      game()?.useEngine(false);
      game()?.setConfirmRep();
      // await practiceOpening();
      // await getNextOpeningPosition();
      // getNext();
      // repQueue.startSearch();
    }
  });

  onCleanup(async () => {
    if (unsubscribe) {
      unsubscribe();
    }
    repQueue.stopSearch();
  });
  // <Show when={selectedOption() === "from position"}>
  //   <VirtualSelectDropdown
  //     options={openingNames()}
  //     value={selectedOpening()}
  //     on_update={setSelectedOpeningName}
  //   >
  //     openings
  //   </VirtualSelectDropdown>
  // </Show>
  return (
    <div class="bg-lum-50 text-lum-800 flex justify-center items-start">
      <div class="bg-lum-100 p-2 max-w-[400px]">
        <div>
          <SelectDropdown
            options={options}
            value={selectedOption()}
            on_update={setSelectedOption}
          >
            type
          </SelectDropdown>
        </div>
        <div>
          <OpeningSelector onSelect={(val: any) => setOpening(val)} />
        </div>
        <div>{selectedOpening().label}</div>
        <button
          class="button bg-blue-200 border-blue-300 text-blue-800"
          onclick={practiceOpening}
        >
          practice opening
        </button>
        <button
          class="button bg-blue-200 border-blue-300 text-blue-800"
          onclick={getNextOpeningPosition}
        >
          next practice opening
        </button>
        <div>Opening depth</div>
        <div class="flex gap-2">
          <div class="grow flex flex-col bg-lum-200 p-2 rounded">
            <div>white</div>
            <div>depth: 3</div>
          </div>
          <div class="grow flex flex-col bg-lum-200 p-2 rounded">
            <div>black</div>
            <div>depth: 3</div>
          </div>
        </div>

        <Show when={loading()}>
          <div class="p-2 text-orange-700 flex gap-2 items-center">
            <BiRegularLoaderAlt class={`${loading() ? "animate-spin" : ""}`} />
            <div>searching...</div>
          </div>
        </Show>
        <Show when={!loading()}>
          <div class="p-2 text-green-700 flex gap-2 items-center">
            <FaSolidCircleCheck />
            <div>Position found</div>
          </div>
        </Show>
        <div>games: {todoFen()?.playerGames}</div>
        <div>elo change: {todoFen()?.playerEloDelta}</div>
        <div>expected elo change: {todoFen()?.expectedEloDelta}</div>
        <div>your win rate: {todoFen()?.playerWinRate}</div>
        <div>lichess win rate: {todoFen()?.lichessWinRate}</div>
        <div class="flex flex-col">
          <Button
            class="p-2 bg-lum-200"
            onclick={async () => {
              await context.repertoire.clear();
            }}
          >
            clear repertoire
          </Button>
          <Button
            class="p-2 bg-lum-200"
            onclick={async () => {
              await repQueue.clear();
            }}
          >
            clear cache
          </Button>
          <Button
            class="p-2 bg-lum-200"
            onclick={async () => {
              getNext();
            }}
          >
            next
          </Button>
          <Button
            class={`p-2 ${needsConfirm() ? "bg-green-500" : "bg-lum-200"}`}
            onclick={async () => {
              game()?.confirmPendingRepMove();
            }}
          >
            confirm rep move
          </Button>
          <Button
            class={`p-2 bg-lum-200`}
            onclick={async () => {
              openLichessPosition();
            }}
          >
            open lichess
          </Button>
        </div>
        <EngineCard />
      </div>
      <BoardView gameId="repertoire-builder" />
      <BottomBarContent mode="main"></BottomBarContent>
    </div>
  );
};

export default RepertoirePage;
