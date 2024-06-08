import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Component, Setter, createMemo, createSignal, onMount } from "solid-js";

import "~/styles/chessground.base.css";
import "~/styles/chessground.brown.css";
import "~/styles/staunty.css";

export const BoardView: Component<{
  setApi: Setter<Api | null>;
}> = (props) => {
  let element: HTMLDivElement | undefined = undefined;
  let container: HTMLDivElement | undefined = undefined;

  const [boardHeight, setBoardHeight] = createSignal(0);

  const resize = () => {
    if (container != undefined) {
      const h =
        Math.floor(
          Math.min(container.offsetHeight, container.offsetWidth) / 8,
        ) * 8;

      setBoardHeight(h);
    }
  };

  onMount(() => {
    if (element) {
      props.setApi(Chessground(element, {}));
    }
    if (container) {
      new ResizeObserver((_) => {
        resize();
      }).observe(container);
    }
  });

  return (
    <>
      <div
        ref={container}
        class="grow shrink overflow-hidden relative z-0"
      ></div>

      <div
        class="absolute z-30 bg-green-100 left-1/2 top-1/2 transorm -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden"
        style={{ height: `${boardHeight()}px`, width: `${boardHeight()}px` }}
      >
        <div ref={element} class="h-full w-full"></div>
      </div>
    </>
  );
};
