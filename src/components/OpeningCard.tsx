import { Content } from "@kobalte/core/dialog";
import { Chess } from "chess.js";
import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  For,
  onMount,
  Setter,
  Show,
} from "solid-js";
import { useSaknotoContext } from "~/Context";
import { getTurn } from "~/utils";

interface NextMove {
  move: string;
  openings: Map<string, OpeningNode>;
}

interface OpeningNode {
  name: string;
  next: Map<string, OpeningNode>;
}

interface MainOpening {
  name: string;
  variations: string[];
}

interface Variation {
  name: string;
}

interface PositionTree {
  count: number;
  openings: { [key: string]: PositionTreeNode };
}

interface PositionTreeNode {
  count: number;
  variations: { [key: string]: PositionTreeNode };
}

const OpeningCard: Component<{
  pgn: string[];
  on_select?: (move: string) => void;
}> = (props) => {
  const context = useSaknotoContext();
  const [opening, setOpening] = createSignal([]);

  const names: Map<string, any> = new Map();
  const [omap, setOMap] = createSignal(new Map());
  const [positionTree, setPositionTree] = createSignal<
    [string, PositionTreeNode][]
  >([]);
  const [totalGames, setTotalGames] = createSignal(1);
  const [winrate, setWinrate] = createSignal(50);

  createEffect(async () => {
    await update(props.pgn);
  });

  const update = async (history: string[]) => {
    console.log("new history");
    console.log(props.pgn);
    const key = props.pgn.join("");
    const opng = names.get(key);
    if (opng) {
      const oparts = [];
      const osplit = opng.name.split(":");

      oparts.push(osplit[0].trim());

      if (osplit.length > 1) {
        for (const op of osplit[1].split(",")) {
          oparts.push(op.trim());
        }
      }
      setOpening(oparts);
    } else {
      setOpening([]);
    }

    const game = new Chess();

    for (const m of props.pgn) {
      game.move(m);
    }
    const f = game.fen();
    const found = omap().get(f);
    if (found) {
      setTotalGames(found.games);
      const c: [string, any][] = [...Object.entries(found.openings)];

      const nodes: [string, PositionTreeNode][] = c;
      nodes.sort((a, b) => b[1].count - a[1].count);
      let t = 0;
      for (const n of nodes) {
        t += n[1].count;
      }
      setPositionTree(nodes);
    } else {
      setPositionTree([]);
    }
    // await context.openingGraph.load_wait();
    // const p = await context.openingGraph.getPosition(f, "white", getTurn(f));
    // if (p) {
    //   let pwr = p.result.white + p.result.black + p.result.draw;
    //   pwr = Math.round((p.result.white / pwr) * 100);
    //   setWinrate(pwr);
    // }
    // const a = omap().get(f);
    // if (!a) {
    //   setContinuations([]);
    //   return;
    // }

    // const by_move = new Map<string, NextMove>();

    // for (const o of a) {
    //   const move = o[0];

    //   if (!by_move.has(move)) {
    //     by_move.set(move, { move, openings: new Map() });
    //   }
    //   const existing: NextMove = by_move.get(move)!;

    //   const fullname: string = o[1].name;
    //   const parts = [];
    //   const colon_split = fullname.split(":");
    //   parts.push(colon_split[0].trim());

    //   if (colon_split.length > 1) {
    //     const comma_split = colon_split[1].split(",");
    //     for (const p of comma_split) {
    //       parts.push(p.trim());
    //     }
    //   }

    //   let parent_map = existing.openings;

    //   let name = parts[0];
    //   if (!parent_map.has(name)) {
    //     parent_map.set(name, { name, next: new Map() });
    //   }
    //   // alert(JSON.stringify(parent_map.get(name)));
    //   parent_map = parent_map.get(name)!.next;

    //   for (let i = 1; i < parts.length; i++) {
    //     let name = parts[i];
    //     if (!parent_map.has(name)) {
    //       parent_map.set(name, { name, next: new Map() });
    //     }
    //     parent_map = parent_map.get(name)!.next;
    //   }

    // let mainname = parts[0];
    // let variation = parts.length > 1 ? parts[1] : null;

    // const existing_opening = existing.openings.get(mainname) ?? {
    //   name: mainname,
    //   variations: [],
    // };

    // if (variation) {
    //   existing_opening.variations.push(variation);
    // }

    // existing.openings.set(mainname, existing_opening);
    // by_move.set(move, existing);
    // }
    // const openarray = [...by_move.values()];
    // alert(JSON.stringify(openarray[0].move));
  };

  const selectMove = (move: string) => {
    if (props.on_select) {
      props.on_select(move);
    }
  };

  onMount(async () => {
    const res = await fetch("/rust_tree.json");

    const json = await res.json();

    const names_res = await fetch("/openings.json");
    const names_json = await names_res.json();
    for (const o of names_json.openings) {
      let parts = o.pgn.split(" ");
      let moves = [];
      for (let i = 0; i < parts.length; i++) {
        if (i % 3 !== 0) {
          moves.push(parts[i]);
        }
      }

      names.set(moves.join(""), o);
      // let game = new Chess();
      // for (const m of moves) {
      //   const fen = game.fen();

      //   const existing = tmp.get(fen) ?? [];
      //   existing.push([m, o]);
      //   tmp.set(fen, existing);
      //   try {
      //     game.move(m);
      //   } catch (e) {
      //     alert(JSON.stringify(o));
      //     console.error(e);
      //     console.error(m);
      //   }
      // }
    }

    setOMap(new Map(Object.entries(json)));
    await update(props.pgn);
  });

  const MoveElement = (move: NextMove) => {
    // const move_openings = move.openings;

    let move_openings = [...move.openings.values()];

    let single_basename: string[] = [];
    if (move_openings.length == 1) {
      let parent: OpeningNode = move.openings.values().next().value;
      let basename = [parent.name];
      let count = parent.next.size;
      while (count == 1) {
        parent = parent.next.values().next().value;
        count = parent.next.size;
        basename.push(`${parent.name}`);
      }

      single_basename = basename;
      move_openings = [...parent.next.values()];
    }

    return (
      <div
        class="lvl-1 border-white/0 border hover:border-accent-500"
        onClick={() => selectMove(move.move)}
      >
        <div class="p-3  rounded-lg inline-block  text-lg font-bold">
          {move.move}
        </div>

        <Show when={move_openings.length > 0}>
          <div class=" overflow-hidden flex  flex-col gap-3 dark:border-zinc-700 border-zinc-300">
            <For each={move_openings}>
              {(v, i) => OpeningNameElement(v, 1, single_basename)}
            </For>
          </div>
        </Show>
      </div>
    );
  };

  // <Show when={single_basename.length > 0}>
  //   <div class="flex flex-wrap">
  //     <For each={single_basename}>
  //       {(bn, bni) => (
  //         <div class=" mb-2 font-medium [&:not(:last-child)]:opacity-50  whitespace-nowrap">
  //           {bni() < single_basename.length - 1
  //             ? `${bn.trim()}->`
  //             : `${bn.trim()}`}
  //         </div>
  //       )}
  //     </For>
  //   </div>
  // </Show>
  const svgCircle = () => {
    let size = 5;
    return (
      <svg
        width={`${size * 2 + 4}px`}
        height={`${size * 2 + 4}px`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={size + 2}
          cy={size + 2}
          r={size}
          stroke="var(--sk-line)"
          stroke-width={2}
        />
      </svg>
    );
  };

  const svgLine = (i: number, len: number, hover: boolean) => {
    let last = i == len - 1;
    let cr = 4;
    let stroke = 2;
    let w = cr * 2 + 2;
    let h = 40;
    let midw = Math.round(w / 2);
    let midh = Math.round(h / 2);
    let color = "var(--level-7-fg)";
    let hcolor = hover ? "var(--level-4-fg)" : color;
    return (
      <svg width={w} height={h} fill="none">
        <Show when={i !== 0}>
          <path
            d={`M ${midw} 0 V ${midh - cr} M ${midw} ${midh + cr}`}
            stroke={color}
            stroke-width={stroke}
          ></path>
        </Show>
        <circle
          cx={midw}
          cy={midh}
          r={cr}
          stroke={hcolor}
          fill={hover ? hcolor : "none"}
          stroke-width={stroke}
        />
        <Show when={!last}>
          <path
            d={`M ${midw} ${midh + cr} ${"V" + h}`}
            stroke={color}
            stroke-width={stroke}
          ></path>
        </Show>
      </svg>
    );
  };

  const countNodes = (node: OpeningNode) => {
    let count = node.next.size > 0 ? 0 : 1;
    for (const n of node.next.values()) {
      count += countNodes(n);
    }
    return count;
  };

  const OpeningNameElement = (
    node: OpeningNode,
    lvl: number,
    basename: string,
  ) => {
    let step = 20;

    let variation_count = countNodes(node);
    let children = [...node.next.values()];

    return (
      <div class="relative lvl-2">
        <div class="relative">
          <div class="flex">
            <div
              class={`` + " w-full px-2  py-2"}
              style={{ "text-indent": `${lvl - 1}rem` }}
            >
              {node.name}
            </div>
          </div>
        </div>
        <div class="">
          <For each={children}>
            {(v, i) => {
              let over = false;
              return (
                <div class="flex items-center pl-4 hoverable lvl-2">
                  <div
                    class=""
                    onMouseOver={() => (over = true)}
                    onMouseLeave={() => (over = false)}
                  >
                    {svgLine(i(), children.length, over)}
                  </div>
                  <div class="ml-4">{v.name}</div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    );
  };

  const PositionName = (
    name: string,
    node: PositionTreeNode,
    total: number,
    index: number,
    selected: Accessor<null | numer>,
    set_selected: Setter<number | null>,
    size: number,
  ) => {
    let children: any[] = [];
    if (node.variations) {
      children = [...Object.entries(node.variations)];
    }

    let [isFirst, setIsFirst] = createSignal(false);
    let [isLast, setIsLast] = createSignal(false);
    let [active, setActive] = createSignal(false);

    createEffect(() => {
      let last = index == size - 1;
      let first = index === 0;

      if (selected() != null) {
        last = last || index == selected() - 1;
        first = first || index == selected() + 1;
      }
      setIsLast(last);
      setIsFirst(first);
      setActive(index === selected() || size === 1);
    });

    let over = false;
    let childcount = children.slice(0, 5).length;

    return (
      <div
        class={`mono hover:cursor-pointer dark:hover:bg-accent-700 text-accent-700 dark:text-accent-200 hover:bg-accent-200 sk-position-item ${isFirst() ? "rounded-t-lg border-t" : ""} ${isLast() ? "rounded-b-lg border-b" : ""} border-b border-x   ${active() ? "dark:bg-accent-800 bg-accent-200 rounded-lg my-4 border dark:border-accent-700 border-accent-300" : "dark:bg-accent-900 bg-accent-100 my-0 dark:border-accent-800  border-accent-200"} ${active() && index == 0 ? "mt-0" : ""}`}
        onMouseEnter={() => (over = true)}
        onMouseLeave={() => (over = false)}
        onClick={() => {
          // console.log(selected);
          set_selected((prev) => (index === prev ? null : index));
        }}
      >
        <div class="px-3 py-2 flex items-center">
          <div
            class={`text-md ${active() ? "text-lg font-semibold dark:text-accent-300" : "font-normal"} grow`}
          >
            {name}
          </div>
          <div class="">{Math.round((node.count * 100) / total)}%</div>
        </div>
        <div
          style={{
            height:
              active() && childcount > 0
                ? `calc(${childcount * 20}px + ${(childcount - 1) * 0.25}rem + 1rem)`
                : "0px",
            padding:
              active() && children.length > 0 ? "0.5rem 0.5rem" : "0rem 0.5rem",
          }}
          class={`sk-position-child rounded-b-lg flex flex-col gap-1 overflow-hidden bg-accent-100 dark:bg-accent-700 dark:text-accent-300 ${active() ? "" : ""}`}
        >
          <For each={children.slice(0, 5)}>
            {([k, v], index) =>
              FirstLevelChild(k, v, index() === children.length - 1, 0)
            }
          </For>
        </div>
      </div>
    );
  };

  const FirstLevelChild = (
    name: string,
    node: PositionTreeNode,
    last: boolean,
    level: number,
  ) => {
    return <div class="font-medium  h-[20px] leading-[20px]">• {name}</div>;
    // const children = [...Object.entries(node.variations)];
    // const [open, setOpen] = createSignal(false);

    return (
      <div
        class="sk-bg2 p-2 text-accent-400 font-semibold hover:cursor-pointer  hover:sk-border5 sk-border3"
        // onClick={() => setOpen((p) => !p)}
      >
        <div class="flex items-center">
          <div class={`ml-2 ${open() ? "font-bold" : "font-medium"}`}>
            {name}
          </div>
        </div>
      </div>
    );
  };
  // <Show when={open()}>
  //   <div class="">
  //     <For each={children}>
  //       {([k, v], idx) =>
  //         PositionChild(k, v, idx(), children.length, level + 1)
  //       }
  //     </For>
  //   </div>
  // </Show>

  // <div class="ml-4">
  //   <For each={children}>

  const PositionChild = (
    name: string,
    node: PositionTreeNode,
    i: number,
    len: number,
    level: number,
  ) => {
    const children = [...Object.entries(node.variations)];
    children.sort((a, b) => b[1].count - a[1].count);

    let [over, setOver] = createSignal(false);

    return (
      <div
        class="pl-3 sk-fg4 font-normal rounded-full hover:font-bold hover:cursor-pointer hover:sk-bg3"
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        <div class="flex items-center ">
          {svgLine(i, len, over())}
          <div class="ml-4 sk-fg3">{name}</div>
          <Show when={node.count > 1}>
            <div class="ml-2 rounded-full  text-sm font-medium sk-fg7 grow text-right mr-4">
              +{node.count} variations
            </div>
          </Show>
        </div>
        <div class="flex relative">
          <Show when={i < len - 1}>
            <div class="sk-tree-line"></div>
          </Show>
        </div>
      </div>
    );
  };

  const [selected, setSelected] = createSignal<number | null>(null);
  createEffect(() => {
    console.log(selected());
  });

  return (
    <div class="flex flex-col shrink grow min-h-0  w-[20vw] overflow-visible">
      <div class="flex flex-col shrink min-h-0 overflow-visible overflow-y-scroll px-4">
        <For each={positionTree()}>
          {([k, v], i) =>
            PositionName(
              k,
              v,
              totalGames(),
              i(),
              selected,
              setSelected,
              positionTree().length,
            )
          }
        </For>
      </div>
    </div>
  );
};

export default OpeningCard;
// <Show when={opening().length > 0}>
//   <div class="sk-bg1 p-4 border sk-border1">
//     <div class="text-lg font-bold">{opening().at(0)}</div>
//     <For each={opening().slice(1)}>
//       {(it, ix) => (
//         <div>
//           <div>{it}</div>
//         </div>
//       )}
//     </For>
//   </div>
// </Show>

// <div class="p-2">
//   <div class="p-2 font-semibold lvl-3 inline-block text-lg rounded-md border">
//     {v.move}
//   </div>
// </div>
// <For each={[...v.openings.values()]}>
//   {(openingx, j) => (
//     <div>
//       <div class="px-2 py-1 lvl-2 hoverable">
//         - {openingx.name}
//       </div>
//       <For each={openingx.variations}>
//         {(vari, p) => (
//           <div class="px-4 hoverable lvl-1">- {vari}</div>
//         )}
//       </For>
//     </div>
//   )}
// </For>
