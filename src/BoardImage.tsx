import { Component, JSX, createEffect, createSignal } from "solid-js";
import { BoardView } from "./BoardView";
import { Api } from "chessground/api";
import { Chess } from "chess.js";

const BoardImage: Component<{
  fen: string;
  class: undefined | JSX.CSSProperties;
}> = (props) => {
  const [api, initializeApi] = createSignal<Api | null>(null);

  createEffect(() => {
    const g = new Chess();
    g.load(props.fen);

    api()?.set({
      fen: props.fen,
      orientation: g.turn() === "w" ? "white" : "black",
    });
  });

  return <BoardView setApi={initializeApi} class={props.class} />;
};

export default BoardImage;
