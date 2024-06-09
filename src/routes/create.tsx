import { Component, createSignal } from "solid-js";
import { BoardView } from "~/BoardView";
import { Api } from "chessground/api";
import { useSakarboContext } from "~/Context";

const Create: Component = () => {
  const context = useSakarboContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  return (
    <div class="flex flex-grow justify-center">
      <BoardView class="rounded" setApi={initializeApi} />
    </div>
  );
};

export default Create;
