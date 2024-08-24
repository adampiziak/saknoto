import { Api } from "chessground/api";
import { DrawShape } from "chessground/draw";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { BoardView } from "~/BoardView";
import { RepCard } from "~/Repertoire";
import { getTurn, san_to_lan } from "~/utils";

const RepertoireEditor: Component<{ rep: RepCard | null }> = (props) => {
  const [api, initializeApi] = createSignal<Api | null>(null);

  createEffect(() => {
    const rep = props.rep;

    if (!rep) {
      return;
    }

    api()?.set({
      fen: rep.fen,
      orientation: getTurn(rep.fen),
    });

    const arrows: DrawShape[] = [];
    for (const r of rep.response) {
      const { orig, dest } = san_to_lan(rep.fen, r);

      arrows.push({
        orig,
        dest,
        brush: "green",
      });
    }
    api()?.set({
      drawable: {
        autoShapes: arrows,
      },
    });
  });

  return (
    <div class="overflow-auto grow p-8">
      {props.rep?.response}
      <BoardView setApi={initializeApi} class="h-full" rounded={true} />
    </div>
  );
};

export default RepertoireEditor;