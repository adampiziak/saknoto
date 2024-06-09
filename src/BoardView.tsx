import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Component, Setter, createSignal, onMount } from "solid-js";

import "~/styles/chessground.base.css";
import "~/styles/chessground.brown.css";
import "~/styles/staunty.css";
import "./BoardView.scss";
import { debounce } from "./utils";

export const BoardView: Component<{
  setApi: Setter<Api | null>;
  class: string | undefined;
}> = (props) => {
  let element: HTMLDivElement | undefined;
  let container: HTMLDivElement | undefined;
  let rootEL: HTMLDivElement | undefined;

  const [boardHeight, setBoardHeight] = createSignal(2000);
  const [rootHeight, setRootHeight] = createSignal(0);

  const resize = debounce(() => {
    if (container != undefined) {
      const rootmin = Math.round(container.offsetHeight);
      setRootHeight(rootmin);
      // const h =
      //   Math.floor(
      //     Math.min(container.offsetHeight, container.offsetWidth) / 8,
      //   ) * 8;

      // setBoardHeight(h);
    }
  }, 100);

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
    <div
      ref={container}
      class={
        props.class +
        " board-view shrink basis-[100%] items-center justify-center flex"
      }
      style={{ "max-width": `${rootHeight()}px` }}
    >
      <div class="board-container rounded overflow-hidden">
        <div ref={element} class="board"></div>
      </div>
    </div>
  );
};
