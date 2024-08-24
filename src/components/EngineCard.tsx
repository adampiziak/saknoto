import { Component, For, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { Evaluation, EvaluationLine } from "~/Engine";
import { STARTING_EVAL } from "~/constants";
import { DraggableIcon } from "~/icons";

const EngineCard: Component<{
  onSelect?: (dest: string) => any;
}> = (props) => {
  const context = useSaknotoContext();

  const [evaluation, setEvaluation] = createSignal<Evaluation>({
    ...STARTING_EVAL,
  });

  onMount(() => {
    context.engine.subscribe_main((newEval) => {
      setEvaluation(newEval);
    });
  });

  const emitSelection = (dest: string) => {
    if (props.onSelect) {
      props.onSelect(dest);
    }
  };

  const Line = (line: EvaluationLine) => {
    const score = line.score;
    let sign = "   ";
    if (score !== 0) {
      sign = score > 0 ? "+" : "-";
    }

    const Move = (move: string, num: number) => {
      let move_num = "";
      if (num % 2 == 0) {
        move_num = `${Math.floor(num / 2) + 1}.`;
        return <div class="text-nowrap">{`${move_num}${move}`}</div>;
      } else {
        return <div class="mr-1 text-nowrap">{`${move}`}</div>;
      }
    };

    const score_string = `${sign}${Math.abs(score)}`;
    return (
      <div
        class="hover:bg-accent-200 bg-accent-50 dark:bg-accent-900 [&:not(:last-child)]:border-b border-accent-300 dark:border-accent-800 py-2 px-2 flex gap-4"
        onClick={() => emitSelection(line.san[0])}
      >
        <div class="w-[32px] grow-0 shrink-0  font-semibold text-right">
          {score_string}
        </div>
        <div class="flex flex-shrink justify-start gap-1 overflow-hidden">
          <For each={line.san}>{(item, index) => Move(item, index())}</For>
        </div>
      </div>
    );
  };

  const EmptyLine = () => {
    return (
      <div class="lvl-1 hoverable sk-list-item  py-2 px-2 flex gap-4 items-center">
        <div class="animate-pulse">loading</div>
      </div>
    );
  };

  return (
    <div class="border border-accent-200 dark:border-accent-700 bg-accent-100 dark:bg-accent-900 rounded">
      <div class="card-header text-lum-900 bg-lum-200 flex justify-between dark:text-accent-50 items-center">
        <DraggableIcon class="w-4 text-accent-600 mr-1" />
        <div class="mr-2 ">Engine</div>
        <div class="font-normal ">{evaluation().mode}</div>
        <div class="text-xs uppercase ml-2 grow dark:text-accent-500 text-accent-700 text-right mr-2">
          {evaluation().cached ? "cached" : ""}
        </div>
        <div class="dark:text-zinc-100 text-accent-700  text-right">
          <span class=""></span>
          <span class=""> {evaluation().depth}</span>
        </div>
      </div>
      <div class="text-accent-700 bg-accent-100 dark:text-accent-300">
        <For each={evaluation().lines}>{(item, _) => Line(item)}</For>
      </div>
    </div>
  );
};

export default EngineCard;
