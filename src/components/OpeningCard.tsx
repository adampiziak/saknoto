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
import { Game } from "~/Game";
import { useGame } from "~/GameProvider";

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

interface PositionTreeRoot {
  fen: string;
  move_count: number;
  openings: PositionTreeNode[];
}

interface PositionTreeNode {
  name: string[];
  count: number;
  moves: string[];
}

interface CurrentPosition {
  name: string[];
  variations: PositionTreeNode[];
}

const OpeningCard: Component<{
  pgn: string[];
  on_select?: (move: string) => void;
}> = (props) => {
  const game = useGame();
  const context = useSaknotoContext();
  const [opening, setOpening] = createSignal<CurrentPosition | null>(null);
  const [pgn, setPgn] = createSignal([]);

  const names: Map<string, any> = new Map();
  const [omap, setOMap] = createSignal<Map<string, PositionTreeRoot>>(
    new Map(),
  );
  const [positionTree, setPositionTree] = createSignal<PositionTreeNode[]>([]);
  const [totalGames, setTotalGames] = createSignal(1);
  const [winrate, setWinrate] = createSignal(50);
  game.subscribe(({ history }) => {
    setPgn(history);
  });

  createEffect(async () => {
    await update(pgn());
  });

  const flatten_openings = (nodes: PositionTreeNode[], level: number) => {
    const groups = {};

    for (const n of nodes) {
      let basename = n.name.at(level);
      if (basename) {
        if (!(basename in groups)) {
          groups[basename] = [];
        }
        groups[basename].push(n);
      }
    }

    return groups;
  };

  const arrows = new Set<string>();
  const update = async (history: string[]) => {
    arrows.clear();
    const key = pgn().join("");
    const opng = names.get(key);
    let currPosition: CurrentPosition = {
      basename: "",
      variation_names: [],
      variations: [],
    };
    if (opng) {
      const oparts = [];
      const osplit = opng.name.split(":");

      oparts.push(osplit[0].trim());

      if (osplit.length > 1) {
        for (const op of osplit[1].split(",")) {
          oparts.push(op.trim());
        }
      }
      currPosition.name = oparts;
    } else {
      currPosition = null;
    }

    const game = new Chess();

    for (const m of pgn()) {
      game.move(m);
    }
    const f = game.fen();
    const found = omap().get(f);
    if (found) {
      let opening_nodes: PositionTreeNode[] = found.openings;
      opening_nodes.sort((a, b) => b.count - a.count);
      let total = 0;
      opening_nodes.forEach((n) => {
        total += n.count;
      });
      setTotalGames(found.move_count);
      if (currPosition) {
        let basenamestring = currPosition.name.join("");
        let blen = basenamestring.length;
        for (const o of found.openings) {
          if (basenamestring === o.name.join("").substring(0, blen)) {
            currPosition.variations.push(o);
          }
        }
      }
      setOpening(currPosition);
      setPositionTree(flatten_openings(opening_nodes, 0));
      const c: [string, any][] = [...Object.entries(found.openings)];

      const nodes: [string, PositionTreeNode][] = c;
      nodes.sort((a, b) => b[1].count - a[1].count);
      let t = 0;
      for (const n of nodes) {
        t += n[1].count;
      }
    } else {
      setPositionTree([]);
    }
  };

  const selectMove = (move: string) => {
    if (props.on_select) {
      props.on_select(move);
    }
  };

  onMount(async () => {
    const res = await fetch("/opening_tree.json");

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
    }

    setOMap(new Map(Object.entries(json)));
    await update(pgn());
  });

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

  const PositionName = (
    basename: string,
    node: PositionTreeNode,
    total: number,
    index: number,
    selected: Accessor<null | numer>,
    set_selected: Setter<number | null>,
    size: number,
  ) => {
    let children: any[] = node;

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

    let max_count = 0;
    for (const c of children) {
      max_count = Math.max(max_count, c.count);
    }
    let childcount = node.slice(0, 5).length;
    let percentage = (max_count * 100) / total;
    let fmt_per =
      percentage > 10
        ? Math.round(percentage)
        : Math.round(percentage * 10) / 10;

    return (
      <div
        class={`mono hover:cursor-pointer text-accent-700 dark:text-accent-200  sk-position-item ${isFirst() ? "rounded-t-lg border-t" : ""} ${isLast() ? "rounded-b-lg border-b" : ""} border-b border-x   ${active() ? "bg-lum-200 rounded-lg my-4 border border-lum-300" : " hover:bg-lum-200 bg-lum-100 my-0 dark:border-accent-800  border-accent-200"} ${active() && index == 0 ? "mt-0" : ""}`}
        onClick={() => {
          // console.log(selected);
          set_selected((prev) => (index === prev ? null : index));
        }}
      >
        <div class="px-3 py-2 flex items-center">
          <div
            class={`text-md ${active() ? "text-lg font-semibold dark:text-accent-300" : "font-normal"} grow`}
          >
            {basename}
          </div>
          <div class="">{fmt_per}%</div>
        </div>
        <div class={`variations-container ${active() ? "active" : ""}`}>
          <div
            class={`sk-position-child rounded-b-lg flex flex-col gap-1 bg-accent-100 dark:bg-accent-700  dark:text-accent-300 ${active() ? "active" : ""}`}
          >
            <For each={children.slice(0, 5)}>
              {(n, index) =>
                VariationElement(n, index() === children.length - 1, 0, total)
              }
            </For>
          </div>
        </div>
      </div>
    );
  };

  const VariationElement = (
    node: PositionTreeNode,
    last: boolean,
    level: number,
    total: number,
  ) => {
    let percentage = (node.count * 100) / total;
    let fmt_per =
      percentage > 10
        ? Math.round(percentage)
        : Math.round(percentage * 10) / 10;
    let mainline = node.name.length > 1 ? "" : node.name.at(0);
    return (
      <div class="font-medium flex gap-3 items-center p-2 ">
        <div class="ml-2 font-bold ">{node.moves.at(0)}</div>
        <div class="ml-2 font-bold ">{node.eco}</div>

        <div class="grow">
          {mainline} {node.name.slice(1).join(", ")}
        </div>
        <div class="w-11 px-0 text-center rounded-lg  dark:text-accent-300">
          {fmt_per}%
        </div>
      </div>
    );
  };

  const [selected, setSelected] = createSignal<number | null>(null);

  const addArrow = (move: string) => {
    arrows.add(move);
    if (game) {
      game.drawArrows([...arrows.values()]);
    }
  };
  const removeArrow = (move: string) => {
    arrows.delete(move);
    if (game) {
      game.drawArrows([...arrows.values()]);
    }
  };

  const playMove = (move: string) => {
    if (game) {
      game.playMove(move);
    }
  };
  const CurrentOpeningCard = (op: CurrentPosition) => {
    const basename = op.name.at(0);
    const current_len = op.name.length;
    let variations = op.name.slice(1);
    variations = variations.length > 0 ? variations : ["main line"];
    const continuations = op.variations.sort((a, b) => b.count - a.count);
    let groups = new Map();

    for (const c of continuations) {
      let move = c.moves.at(0);
      if (!groups.has(move)) {
        groups.set(move, []);
      }

      let existing = groups.get(move)!;

      existing.push(c);
    }

    const ContinuationElement = (it: PositionTreeNode) => {
      let variation_name;
      if (it.name.slice(current_len).length == 0) {
        variation_name = `${it.name.slice(current_len - 1).join(", ")}`;
      } else {
        variation_name = `${it.name.slice(current_len).join(", ")}`;
      }
      return (
        <div
          class="flex gap-3  bg-lum-200 rounded-lg hover:bg-lum-300 hover:cursor-pointer hover:[border-8 ]"
          onmouseenter={() => {
            addArrow(it.moves.at(0));
          }}
          onmouseleave={() => {
            removeArrow(it.moves.at(0));
          }}
          onclick={() => {
            playMove(it.moves.at(0));
          }}
        >
          <div class="p-2 bg-lum-300 rounded-lg items-center text-lum-700 justify-center flex min-w-12 font-semibold">
            {it.moves.at(0)}
          </div>
          <div class="flex items-center justify-center w-6 text-lum-600 mx-1">
            {it.eco}
          </div>
          <div class="grow flex items-center text-lum-700 font-semibold">
            {variation_name}
          </div>
          <div class="  grow-0 min-w-12 flex justify-end items-center font-medium text-lum-600 pr-3">
            {Math.round((it.count / totalGames()) * 100)}%
          </div>
        </div>
      );
    };

    return (
      <div class="max-h-full text-lum-900  bg-lum-100 mx-4  rounded-lg border-lum-200 border  mb-6 h-fit min-h-fit">
        <div class="px-3 pt-1 pb-2 bg-lum-100 my-2 mx-1 rounded-lg">
          <div class="text-2xl font-medium text-lum-800">{basename}</div>
          <div class="text-lg text-lum-700">{variations.join(", ")}</div>
        </div>
        <div class="flex flex-col gap-2 py-3 pt-0 px-2 bg-lum-100 h-fit min-h-fit">
          <For each={continuations.slice(0, 5)}>
            {(it, ix) => ContinuationElement(it)}
          </For>
        </div>
      </div>
    );
  };

  return (
    <div class="flex flex-col   shrink grow min-h-0  overflow-scroll">
      <Show when={opening() !== null}>{CurrentOpeningCard(opening())}</Show>
      <div class="text-lum-600 mx-5 my-1">Named openings in this position</div>
      <div class="flex flex-col shrink min-h-0 overflow-visible overflow-y-scroll px-4">
        <For each={Object.entries(positionTree())}>
          {([basename, node], i) =>
            PositionName(
              basename,
              node,
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
