import { Component, createSignal, onMount } from "solid-js";
import { BoardView } from "~/BoardView";
import { Api } from "chessground/api";
import { useSakarboContext } from "~/Context";
import { Chess } from "chess.js";

const Create: Component = () => {
  const context = useSakarboContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  const [position, setPosition] = createSignal(new Chess().fen());

  onMount(async () => {
    // const todays_cards = localStorage.getItem("laststudy");

    console.log("hola?");
    await context.openingGraph.load_wait();
    await context.repertoire.load();
    console.log("wait");
    const positions = await context.openingGraph.getAll();

    positions.sort((a, b) => b.count - a.count);
    if (positions.length > 2) {
      setPosition(positions[3].fen);
      api().set({
        fen: positions[3].fen,
      });
    }
    console.log("set");
  });

  return (
    <div class="flex flex-grow justify-center">
      {position()}
      <BoardView class="rounded" setApi={initializeApi} />
    </div>
  );
};

export default Create;
