import { Component, createEffect, createSignal, on, onMount } from "solid-js";
import { FilterOptions } from "./FilterOptionsComponent";
import { Position, Split } from "~/OpeningGraph";
import { RepCard } from "~/Repertoire";
import { colorScheme, debounce, dest_fen, getTurn } from "~/utils";
import { STARTING_FEN } from "~/constants";
import { clientOnly } from "@solidjs/start";
import { useSaknotoContext } from "~/Context";

const MyClientOnlyGraph = clientOnly(() => import("~/ClientOnlyGraph"));

const ExploreGraph: Component<{
  options: FilterOptions;
  split: Split;
  repertoire: RepCard[];
}> = (props) => {
  let context = useSaknotoContext();
  let containerRef: HTMLDivElement | undefined;
  let [mode, setMode] = createSignal<"light" | "dark">("light");

  let [size, setSize] = createSignal<[number, number]>([0, 0]);

  let [data, setData] = createSignal<{ nodes: any[]; links: any[] }>({
    nodes: [],
    links: [],
  });

  const updateGraph = debounce(() => {
    console.log("update");
    setSize([containerRef?.offsetWidth ?? 0, containerRef?.offsetHeight ?? 0]);
  }, 100);

  createEffect(() => {
    setData(
      forceDirectedGraph(
        props.split,
        props.repertoire,
        props.options.color,
        mode(),
      ),
    );
  });

  onMount(() => {
    context.themeManager.onChange((mode, theme) => {
      setMode(mode);
    });
    if (containerRef) {
      new ResizeObserver(() => {
        updateGraph();
      }).observe(containerRef);
    }
  });

  return (
    <div ref={containerRef} class="shrink grow min-w-0">
      <MyClientOnlyGraph data={data()} size={size()} />
    </div>
  );
};

export default ExploreGraph;

const forceDirectedGraph = (
  split: Split,
  reps: RepCard[],
  playercolor: "black" | "white" | "both",
  mode: "light" | "dark",
) => {
  const nodeMap = new Map();
  const nodes = [];
  const links = [];

  const repSet = new Set();

  playercolor = playercolor === "both" ? "white" : playercolor;

  for (const r of reps) {
    repSet.add(r.fen);
  }

  let count = 0;

  const scheme = mode;

  const node_color = scheme === "light" ? "#333333" : "#CCCCCC";
  const key = `${playercolor}white`;
  console.log(key);
  console.log(split);

  const starting_node = split[key].get(STARTING_FEN);

  if (!starting_node) {
    return {
      nodes: [],
      links: [],
    };
  }

  let queue = [starting_node];
  nodeMap.set(queue[0].fen, {
    id: queue[0].fen,
    count: queue[0].count,
    color: node_color,
  });
  while (count < 500) {
    queue.sort((a, b) => b?.count - a?.count);
    const p = queue.shift();
    if (!p) {
      break;
    }

    for (const m of Object.values(p.moves)) {
      const dest = dest_fen(p.fen, m.uci);
      const turn = getTurn(dest);
      const key = playercolor + turn;

      const dp = split[key].get(dest);
      if (dp && dp.count > 1) {
        const color = repSet.has(dp.fen) ? "#304FFE" : node_color;
        nodeMap.set(dp.fen, {
          id: dp?.fen,
          val: dp?.count,
          color,
        });
        links.push({
          source: p.fen,
          target: dp.fen,
          value: m.count,
          color: node_color,
        });

        queue.push(dp);
      }
    }

    count += 1;
  }

  for (const n of nodeMap.values()) {
    nodes.push(n);
  }

  return {
    nodes,
    links,
  };
};
