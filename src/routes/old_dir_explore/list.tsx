import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal, For, on, onMount } from "solid-js";
import BoardImage from "~/BoardImage";
import ExploreNav from "~/components/ExploreNav";
import FilterOptionsComponent, {
  FilterOptions,
} from "~/components/FilterOptionsComponent";
import { useSaknotoContext } from "~/Context";

export default function ExploreListPage() {
  const context = useSaknotoContext();
  const [positions, setPositions] = createSignal<Position[]>([]);

  // onMount(async () => {
  //   await updateList();
  // });
  const optionsSignal = createSignal<FilterOptions>({
    color: "both",
    repertoire: "no filter",
    sortby: "games",
    view: "list",
  });

  const [options, _] = optionsSignal;

  const updateList = async () => {
    await context.openingGraph.load_wait();
    await context.repertoire.load();
    const filter_options = options();

    const openings = await context.openingGraph.getAllSplit();

    const reps = (await context.repertoire.all()).reduce((m, o) => {
      m.set(o.fen, o);
      return m;
    }, new Map());

    const white = [...openings.whitewhite.values()];
    const black = [...openings.blackblack.values()];
    const all = [];

    if (filter_options.color === "both") {
      all.push(...white);
      all.push(...black);
    } else if (filter_options.color === "white") {
      all.push(...white);
    } else {
      all.push(...black);
    }

    let filtered = [];

    if (filter_options.repertoire === "only") {
      filtered = all.filter((p) => reps.has(p.fen));
    } else if (filter_options.repertoire === "exclude") {
      filtered = all.filter((p) => !reps.has(p.fen));
    } else {
      filtered = all;
    }

    filtered = filtered.filter((p) => p.count > 5);

    if (filter_options.sortby === "games") {
      filtered.sort((a, b) => b.count - a.count);
    } else {
      if (filter_options.color === "white") {
        filtered.sort(
          (a, b) =>
            b.result.black / b.result.white - a.result.black / a.result.white,
        );
      } else if (filter_options.color === "black") {
        filtered.sort(
          (a, b) =>
            b.result.white / b.result.black - a.result.white / a.result.black,
        );
      }
    }
    setPositions(filtered.slice(0, 100));
  };

  createEffect(
    on(options, async () => {
      await updateList();
    }),
  );

  const navigate = useNavigate();

  const gotoPosition = (fen: string) => {
    context.ui.board.set({ active: true, fen });
  };

  return (
    <div class="flex grow gap-4 shrink min-h-0">
      <ExploreNav />
      <div class="flex-grow flex flex-col flex-nowrap">
        <div>
          <FilterOptionsComponent options={optionsSignal} />
        </div>
        <div class="overflow-hidden relative min-h-0 grow-0 shrink">
          <div class="min-h-0 overflow-scroll h-full">
            <For each={positions()}>
              {(item, index) => (
                <div
                  class="flex lvl-1 border-b hoverable max-w-[800px]"
                  onClick={() => gotoPosition(item.fen)}
                >
                  <BoardImage fen={item.fen} class="w-48 h-48" />
                  <div class="flex-col">
                    <div>{item.fen}</div>
                    <div>{item.count}</div>
                    <div>
                      {Math.round(
                        options().color === "white"
                          ? (item.result.white * 100) /
                              (item.result.white + item.result.black)
                          : (item.result.black * 100) /
                              (item.result.white + item.result.black),
                      )}
                      %
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
