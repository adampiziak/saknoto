import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Component, Setter, createSignal, onMount } from "solid-js";

import "~/styles/chessground.base.css";
import "~/styles/chessground.brown.css";
import "~/styles/staunty.css";
import "./BoardView.scss";
import { debounce } from "./utils";
import { Game } from "./Game";

export const BoardView: Component<{
  setApi?: Setter<Api | null> | undefined;
  class?: undefined | string;
  rounded?: boolean | undefined;
  onMove?: ((lan: string) => void) | undefined;
  onReady?: ((game: Game) => void) | undefined;
  game?: Game | undefined;
}> = (props) => {
  let element: HTMLDivElement | undefined;
  let container: HTMLDivElement | undefined;

  const [rootHeight, setRootHeight] = createSignal(0);

  const resize = debounce(() => {
    if (container != undefined) {
      const rootmin = Math.floor(container.offsetHeight / 8) * 8;
      setRootHeight(rootmin);
      console.log(rootmin);
    }
  }, 100);

  onMount(() => {
    if (element) {
      const api = Chessground(element, {});

      if (props.game) {
        props.game.attach(element);
      }

      const moveCallback = props.onMove;
      if (moveCallback) {
        api.set({
          movable: {
            events: {
              after: (orig, dest) => moveCallback(`${orig}${dest}`),
            },
          },
        });
      }
      if (props.setApi) {
        props.setApi(api);
      }
    }
    if (container) {
      // new ResizeObserver((_) => {
      //   resize();
      // }).observe(container, {});
      const cposition = (e: HTMLDivElement) => {
        const rect = e.getBoundingClientRect();
        return {
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY,
          w: rect.width,
          h: rect.height,
        };
      };

      let last_pos = cposition(container);

      const checkpos = () => {
        const newp = cposition(container);
        if (
          newp.x != last_pos.x ||
          newp.y != last_pos.y ||
          newp.w != last_pos.w ||
          newp.h != last_pos.h
        ) {
          last_pos = newp;
          console.log("new");
          resize();
        }
        requestAnimationFrame(checkpos);
      };

      resize();
      checkpos();
    }
  });

  return (
    <div
      ref={container}
      class={
        props.class +
        " board-view shrink basis-[100%] items-start justify-center flex"
      }
      style={{ "max-width": `${rootHeight()}px` }}
    >
      <div class="board-container overflow-hidden">
        <div
          ref={element}
          class={`board ${props.rounded ? "rounded overflow-hidden" : ""}`}
        ></div>
      </div>
    </div>
  );
};

const myalert = debounce(() => {
  alert("hola");
}, 1000);
