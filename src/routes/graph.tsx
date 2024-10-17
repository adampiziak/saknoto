import { Component, createSignal, onMount, Setter } from "solid-js";
import * as d3 from "d3";
import { useSaknotoContext } from "~/Context";
import { Position, Split } from "~/OpeningGraph";
import { dest_fen, getTurn } from "~/utils";
import { STARTING_FEN } from "~/constants";
import BoardImage from "~/BoardImage";
import ForceGraph3D from "3d-force-graph";
import { clientOnly } from "@solidjs/start";
import { RepCard } from "~/Repertoire";

const MyClientOnlyGraph = clientOnly(() => import("~/ClientOnlyGraph"));

const Graph: Component = () => {
  const context = useSaknotoContext();

  // let [myList, setMyList] = createSignal(0);
  const [boardFen, setBoardFen] = createSignal(STARTING_FEN);
  const [gdata, setGData] = createSignal(null);

  let pageRef;

  onMount(async () => {
    await context.openingGraph.load_wait();
    await context.repertoire.load();

    const split = await context.openingGraph.getAllSplit();
    const reps = await context.repertoire.all();

    /* setMyList(graph.whiteOpenings.positions.size); */
    if (pageRef) {
      console.log(pageRef);
      const data = forceDirectedGraph(
        pageRef.offsetWidth,
        pageRef.offsetHeight,
        split,
        setBoardFen,
        reps,
      );
      setTimeout(() => {
        // const graph = ForceGraph3D();
        setGData(data);
        setGData(data);
        console.log(data);
      }, 300);
    }
  });

  return (
    <div class="graph-page flex-grow bg-pink-500" ref={pageRef}>
      <MyClientOnlyGraph data={gdata()} />
    </div>
  );
};

const forceDirectedGraph = (
  width,
  height,
  split: Split,
  fenSetter: Setter<string>,
  reps: RepCard[],
) => {
  const nodeMap = new Map();
  const nodes = [];
  const links = [];

  const repSet = new Set();

  for (const r of reps) {
    repSet.add(r.fen);
  }

  let count = 0;
  // let playercolor = "white";
  let playercolor = "black";
  interface MoveColor {
    color: "white" | "black";
    pos: Position;
  }

  let queue = [split.blackwhite.get(STARTING_FEN)];
  nodeMap.set(queue[0].fen, {
    id: queue[0].fen,
    count: queue[0].count,
    color: "#222222",
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
        const color = repSet.has(dp.fen) ? "#304FFE" : "#222222";
        nodeMap.set(dp.fen, {
          id: dp?.fen,
          val: dp?.count,
          color,
        });
        links.push({
          source: p.fen,
          target: dp.fen,
          value: m.count,
          color: "#333333",
        });

        queue.push(dp);
      }
    }

    count += 1;
  }

  for (const n of nodeMap.values()) {
    nodes.push(n);
  }

  console.log("COUNT");
  console.log(count);

  // console.log(positionMap.size);
  // for (const p of poss) {
  //   gposs.set(p.fen, p);
  // }

  // console.log(gposs.size);
  // for (const p of poss) {
  //   for (const [key, val] of Object.entries(p.moves)) {
  //     const dest = dest_fen(p.fen, key);

  //     const existing = positionMap.get(dest);
  //     if (!existing) {
  //       continue;
  //     }
  //     console.log(existing);

  //     if (existing.count > 1) {
  //       console.log(gposs.has(existing.fen));
  //       gposs.set(existing.fen, existing);
  //     }
  //   }
  // }
  // console.log(gposs.size);

  // for (const p of gposs.values()) {
  //   console.log("hola");
  //   nodes.push({ id: p.fen, count: p.count });
  //   for (const [key, val] of Object.entries(p.moves)) {
  //     const dest = dest_fen(p.fen, key);
  //     const existing = gposs.get(dest);
  //     if (existing) {
  //       links.push({
  //         source: p.fen,
  //         target: dest,
  //         value: existing.count,
  //       });
  //     }
  //   }
  // }

  console.log("done1");
  console.log(nodes.length);
  console.log(links.length);

  return {
    nodes,
    links,
  };

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    /* labels
     *   .attr("x", function (d) {
     *     return d.x;
     *   })
     *   .attr("y", function (d) {
     *     return d.y;
     *   }); */
  }

  d3.forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .strength(1),
      /* .strength((d) => scale(d.value, 1, 20, 0, 1)), */
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);
  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
    .attr("stroke-width", (d) => Math.sqrt(d.value));
  const node = svg
    .append("g")
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
    .attr("r", (d) => Math.min(Math.pow(d.count, 0.7) + 3, 20));
  node.on("click", (d) => {
    console.log(d.target.__data__.id);
    fenSetter(d.target.__data__.id);
  });

  return svg.node();
};

export default Graph;
