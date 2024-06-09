import { Component, createSignal } from "solid-js";
import { BoardView } from "~/BoardView";
import { Api } from "chessground/api";
import { useSakarboContext } from "~/Context";

const Create: Component = () => {
  const context = useSakarboContext();
  const [api, initializeApi] = createSignal<Api | null>(null);
  return (
    <div class="flex h-full w-full bg-green-500">
      <BoardView setApi={initializeApi} class="grow bg-red-50" />
    </div>
  );
};

export default Create;
