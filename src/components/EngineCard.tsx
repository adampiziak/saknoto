import { Component, For, createEffect, createSignal } from "solid-js";
import {
  EMPTY_EVALUATION,
  Evaluation,
  EvaluationLine,
  createEmptyEvaluation,
} from "~/Engine";

const EngineCard: Component<{ evaluation: Evaluation | undefined | null }> = (
  props,
) => {
  console.log(props.evaluation);
  const [evaluation, setEvaluation] = createSignal<Evaluation>(
    createEmptyEvaluation(),
  );

  createEffect(() => {
    console.log("NEW EVAL");
    console.log(props.evaluation);
    setEvaluation(props.evaluation ?? createEmptyEvaluation());
  });

  const Line = (line: EvaluationLine) => {
    const score = line.score;
    let sign = " ";
    if (score !== 0) {
      sign = score > 0 ? "+" : "-";
    }

    const Move = (move: string, num: number) => {
      let move_num = "";
      if (num % 2 == 0) {
        move_num = `${Math.floor(num / 2) + 1}.`;
        return <div>{`${move_num}${move}`}</div>;
      } else {
        return <div class="mr-1">{`${move}`}</div>;
      }
    };

    const score_string = `${sign}${score}`;
    return (
      <div class="lvl-1 hoverable sk-list-item  py-2 px-2 flex gap-4 items-center">
        <div class="w-8 font-semibold text-right">{score_string}</div>
        <div class="flex justify-start gap-1">
          <For each={line.san}>{(item, index) => Move(item, index())}</For>
        </div>
      </div>
    );
  };

  return (
    <div class="card lvl-1 border">
      <div class="lvl-1 border-b">
        <For each={evaluation().lines}>{(item, _) => Line(item)}</For>
      </div>
      <div class="lvl-2  py-1 px-2 text-right font-medium">
        depth: {evaluation().depth}
      </div>
    </div>
  );
};

export default EngineCard;
