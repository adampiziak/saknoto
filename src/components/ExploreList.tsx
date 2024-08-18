import { Component, createEffect, createSignal, For } from "solid-js";
import { Position, Split } from "~/OpeningGraph";
import { FilterOptions } from "./FilterOptionsComponent";
import { RepCard } from "~/Repertoire";
import { useSaknotoContext } from "~/Context";
import BoardImage from "~/BoardImage";

interface PositionInfo extends Position {
  color: "white" | "black";
  elo_delta: number;
}

const ExploreList: Component<{
  options: FilterOptions;
  split: Split;
  repertoire: RepCard[];
}> = (props) => {
  const context = useSaknotoContext();
  const [positions, setPositions] = createSignal<PositionInfo[]>([]);

  createEffect(() => {
    const options = props.options;

    let all: PositionInfo[] = [];
    const repMap = new Map(props.repertoire.map((r) => [r.fen, r]));

    // game color
    if (options.color === "white" || options.color === "both") {
      const games: PositionInfo[] = [...props.split.whitewhite.values()].map(
        (v) => {
          return {
            color: "white",
            elo_delta: (v.result.white - v.result.black) * 6,
            ...v,
          };
        },
      );
      all.push(...games);
    }

    if (options.color === "black" || options.color === "both") {
      const games: PositionInfo[] = [...props.split.blackblack.values()].map(
        (v) => {
          return {
            color: "black",
            elo_delta: (v.result.black - v.result.white) * 6,
            ...v,
          };
        },
      );
      all.push(...games);
    }

    // sorting
    if (options.sortby == "games") {
      all.sort((a, b) => b.count - a.count);
    }

    if (options.sortby === "elo delta") {
      all.sort((a, b) => a.elo_delta - b.elo_delta);
    }

    if (options.sortby === "winrate") {
      all.sort(
        (a, b) =>
          a.result.white / a.result.black - b.result.white / b.result.black,
      );
    }

    if (options.repertoire === "exclude repertoire") {
      const filtered = all.filter((p) => !repMap.has(p.fen));
      all = filtered;
    } else if (options.repertoire === "repertoire only") {
      const filtered = all.filter((p) => repMap.has(p.fen));
      all = filtered;
    }

    const filtered = all.filter((p) => p.count > 2);
    all = filtered;

    setPositions(all.slice(0, 100));
  });

  return (
    <div class="flex flex-col grow shrink min-h-0 overflow-auto">
      <For each={positions()}>
        {(p, i) => (
          <div
            onClick={() =>
              context.ui.sidebar.set({
                active: true,
                view: "board",
                data: p.fen,
              })
            }
            class="flex border-b dark:border-accent-900 dark:text-accent-50 hover:bg-accent-500"
          >
            <BoardImage fen={p.fen} class="w-48 h-48" />
            <div class="px-2">
              <div class="opacity-60">{p.fen}</div>
              <div>games: {p.count}</div>
              <div>elo Δ: {p.elo_delta}</div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ExploreList;
