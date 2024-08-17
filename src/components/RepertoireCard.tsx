import { Button } from "@kobalte/core/button";
import { Component, For, createEffect, createSignal } from "solid-js";
import { useSaknotoContext } from "~/Context";

const RepertoireCard: Component<{
  fen: string | undefined;
  requestLine?: () => any;
}> = (props) => {
  const context = useSaknotoContext();
  const [responses, setResponses] = createSignal([]);

  createEffect(async () => {
    const fen = props.fen;
    if (fen) {
      const res = await context.repertoire.getLine(fen);
      setResponses(res?.response ?? []);
    }
  });

  const add_line = () => {
    console.log("line");
    if (props.requestLine) {
      props.requestLine();
    }
  };

  return (
    <div class="bg-accent-100 rounded overflow-hidden dark:bg-accent-800 dark:border-accent-700 border text-accent-800 dark:text-accent-100">
      <div class="bg-accent-200 py-1 px-2 dark:bg-accent-700 font-medium">
        Repertoire
      </div>
      <div class="p-2">
        <Button onClick={() => add_line()} class="button">
          Add Line
        </Button>
        <For each={responses()}>
          {(item, index) => (
            <div class="font-semibold p-2 lvl-2 my-2 rounded hoverable">
              {item}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default RepertoireCard;
