import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Component, Setter, createSignal, onCleanup, onMount } from "solid-js";

import "~/styles/chessground.base.css";
import "~/styles/chessground.brown.css";
import "~/styles/staunty.css";
import "./BoardView.scss";
import { Game } from "./Game";
import { useGame } from "./GameProvider";
import { nearest } from "./utils";
import { useMobile } from "./lib/hooks";

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
  mode?: BoardViewMode;
  onResize?: (rect: number) => void;
  responsive?: boolean;
  useEngine?: boolean;
  // roundMode?: "floor" | "round" | "ceil";
  alignHor?: "start" | "center" | "end";
  alignVer?: "start" | "center" | "end";
  boardClass?: string;
  gameId?: string;
}> = (props) => {
  let element: HTMLDivElement | undefined;
  let container: HTMLDivElement | undefined;
  const game = useGame();

  const [boardSize, setBoardSize] = createSignal(0);

  const mobile = useMobile();
  const [containerSize, setContainerSize] = createSignal(0);

  const resize = () => {
    if (container != undefined) {
      const rect = container.getBoundingClientRect();

      const container_width = nearest(rect.width, 8);
      const container_height = nearest(rect.height, 8);
      const minsize = Math.min(container_height, container_width);
      if (mobile()) {
        setContainerSize(rect.width);
      } else {
        setContainerSize(rect.height);
      }

      setBoardSize(nearest(minsize, 8));
    }
  };

  onCleanup(() => {
    game().detachAll();
  });

  onMount(() => {
    if (element) {
      const api = Chessground(element, {});

      if (game) {
        game().attach(element, props.gameId);
        if (props.useEngine) {
          game().useEngine(props.useEngine);
        }
        api.set({ addDimensionsCssVarsTo: container });
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
      style={{
        "max-width": mobile() ? "" : `${containerSize()}px`,
        "max-height": mobile() ? `${containerSize()}px` : "",
      }}
      class={`board-view min-h-0 min-w-0 text-lum-500 max-w-full  self-stretch max-h-full grow shrink flex ${props.class ?? ""}`}
    >
      <div
        ref={element}
        style={{ height: `${boardSize()}px`, width: `${boardSize()}px` }}
        class={`board-view-board ${props.boardClass ? props.boardClass : ""}`}
      ></div>
    </div>
  );
};
