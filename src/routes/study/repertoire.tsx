import { Component, createSignal, For, onMount, Suspense } from "solid-js";
import BoardImage from "~/BoardImage";
import RepertoireEditor from "~/components/RepertoireEditor";
import { useSaknotoContext } from "~/Context";
import { RepCard } from "~/Repertoire";

const RepertoirePage: Component = () => {
  const context = useSaknotoContext();
  const [reps, setReps] = createSignal<RepCard[]>([]);
  const [selected, setSelected] = createSignal<RepCard | null>(null);

  onMount(async () => {
    await context.repertoire.load();
    const all = await context.repertoire.all();

    setReps(all);
  });

  return (
    <div class="flex bg-lum-50 text-lum-900">
      <div class="overflow-auto grow">
        <For each={reps()}>
          {(it, ix) => (
            <div class="flex" onClick={() => setSelected(it)}>
              <Suspense>
                <BoardImage fen={it.fen} class="w-24 h-24" />
                <div class="p-2">{it.fen}</div>
              </Suspense>
            </div>
          )}
        </For>
      </div>
      <RepertoireEditor rep={selected()} />
    </div>
  );
};

export default RepertoirePage;
