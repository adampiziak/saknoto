import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Component, Setter, createSignal, onMount } from "solid-js";

import "~/styles/chessground.base.css";
import "~/styles/chessground.brown.css";
import "~/styles/staunty.css";
import "./BoardView.scss";
import { debounce } from "./utils";
import { Game } from "./Game";

export enum BoardViewMode {
  COLUMN,
  ROW,
}

export const BoardView: Component<{
  setApi?: Setter<Api | null> | undefined;
  class?: undefined | string;
  rounded?: boolean | undefined;
  onMove?: ((lan: string) => void) | undefined;
  onReady?: ((game: Game) => void) | undefined;
  game?: Game | undefined;
  mode?: BoardViewMode;
  onResize?: (rect: DOMRect) => void;
}> = (props) => {
  let element: HTMLDivElement | undefined;
  let container: HTMLDivElement | undefined;

  const [boardSize, setBoardSize] = createSignal(0);

  // const resize = debounce(() => {
  //   if (container != undefined) {
  //     const rect = container.getBoundingClientRect();
  //     const container_width = Math.floor(rect.width / 8) * 8;
  //     const container_height = Math.floor(rect.height / 8) * 8;
  //     const maxsize = Math.min(container_height, container_width);
  //     console.log(`size ${container_width} x ${container_height}: ${maxsize}`);
  //     setBoardSize(maxsize);
  //   }
  // }, 100);
  const [conStyle, setConStyle] = createSignal({
    "max-width": props.mode === BoardViewMode.COLUMN ? "100vw" : "100vh",
    "max-height": props.mode === BoardViewMode.COLUMN ? "100vw" : "100vh",
  });
  const resize = () => {
    console.log("resize");
    if (container != undefined) {
      const rect = container.getBoundingClientRect();
      if (props.onResize) {
        console.log("resize parent");
        props?.onResize(rect);
      }
      const container_width = Math.ceil(rect.width / 8) * 8;
      const container_height = Math.ceil(rect.height / 8) * 8;
      const minsize = Math.min(container_height, container_width);
      const maxsize = Math.max(container_height, container_width);
      // console.log(`size ${container_width} x ${container_height}: ${minsize}`);
      setBoardSize(minsize);
      if (props.mode === BoardViewMode.COLUMN) {
        setConStyle({ "max-height": `${(minsize + maxsize) / 2}px` });
      } else {
        setConStyle({ "max-width": `${(maxsize + minsize * 2) / 3}px` });
      }
    }
  };

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
      style={conStyle()}
      class={
        props.class +
        " flex board-view  justify-center items-center min-h-0 min-w-0 max-w-full max-h-full grow shrink"
      }
    >
      <div class="board-container overflow-hidden">
        <div
          ref={element}
          style={{ height: `${boardSize()}px`, width: `${boardSize()}px` }}
          class={`board ${props.rounded ? "rounded overflow-hidden" : ""}`}
        ></div>
      </div>
    </div>
  );
};

const myalert = debounce(() => {
  alert("hola");
}, 1000);
