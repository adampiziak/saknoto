import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal, For, on, onMount, Show } from "solid-js";
import BoardImage from "~/BoardImage";
import ExploreNav from "~/components/ExploreNav";
import FilterOptionsComponent, {
  FilterOptions,
} from "~/components/FilterOptionsComponent";
import { useSaknotoContext } from "~/Context";
import { clientOnly } from "@solidjs/start";
import { Split } from "~/OpeningGraph";
import { STARTING_FEN } from "~/constants";
import { colorScheme, dest_fen, getTurn } from "~/utils";
import ExploreList from "~/components/ExploreList";
import ExploreGraph from "~/components/ExploreGraph";
import { RepCard } from "~/Repertoire";

const MyClientOnlyGraph = clientOnly(() => import("~/ClientOnlyGraph"));

export default function ExploreListPage() {
  const context = useSaknotoContext();
  const [split, setSplit] = createSignal<Split>({
    whitewhite: new Map(),
    whiteblack: new Map(),
    blackblack: new Map(),
    blackwhite: new Map(),
  });

  const [repertoire, setRepertoire] = createSignal<RepCard[]>([]);

  const optionsSignal = createSignal<FilterOptions>({
    color: "both",
    repertoire: "no filter",
    sortby: "games",
    view: "list",
  });
  const [options, setOptions] = optionsSignal;
  const [ready, setReady] = createSignal(false);

  onMount(async () => {
    await context.openingGraph.load_wait();
    await context.repertoire.load();

    const split = await context.openingGraph.getAllSplit();
    const reps = await context.repertoire.getAll();

    setSplit(split);
    setRepertoire(reps);

    const stored_options = window.localStorage.getItem("explore_options");
    if (stored_options) {
      const json = JSON.parse(stored_options);
      setOptions(json);
    }

    setReady(true);
  });

  createEffect(() => {
    if (!ready()) {
      return;
    }

    window.localStorage.setItem("explore_options", JSON.stringify(options()));
  });

  return (
    <div class="flex grow shrink min-h-0 min-w-0 justify-start w-screen bg-accent-50 dark:bg-accent-950">
      <Show when={ready()} fallback={<div>loading...</div>}>
        <FilterOptionsComponent options={optionsSignal} />
        <Show when={options().view === "list"}>
          <ExploreList
            options={options()}
            split={split()}
            repertoire={repertoire()}
          />
        </Show>
        <Show when={options().view === "graph"}>
          <ExploreGraph
            options={options()}
            split={split()}
            repertoire={repertoire()}
          />
        </Show>
      </Show>
    </div>
  );
}
