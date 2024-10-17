import { For, createSignal, onMount } from "solid-js";
import BoardImage from "~/BoardImage";
import { useSaknotoContext } from "~/Context";
import { RepCard } from "~/Repertoire";

const Explore: Component = () => {
  const context = useSaknotoContext();

  const [lines, setLines] = createSignal<RepCard[]>([]);

  const load_repertoire = async () => {
    const reps = await context.repertoire.all();
    reps.sort((a, b) => a.card.due - b.card.due);
    setLines(reps);
  };

  const formatTimeUntil = (dt: Date) => {
    const duration = Math.floor((dt - Date.now()) / 1000);
    if (duration < 0) {
      return "Due now";
    }
    const days = Math.floor(duration / (3600 * 24));
    const hours = Math.floor((duration % (3600 * 24)) / 3600);
    const min = Math.floor(((duration % (3600 * 24)) % 3600) / 60);
    const sec = Math.floor(duration % 60);
    return `Due in ${days}d ${hours}h ${min}m ${sec}s`;
  };

  onMount(async () => {
    if (!context.repertoire.ready()) {
      await context.repertoire.load();
    }

    await load_repertoire();
  });
  return (
    <div>
      <div>explore</div>
      <For each={lines()}>
        {(item, index) => (
          <div class="flex p-2 gap-4 hoverable lvl-1 border-b">
            <BoardImage fen={item.fen} class="h-48 w-48 " />
            <div class="flex flex-col">
              <div>{formatTimeUntil(item.card.due)}</div>
              <div>{item.card.state}</div>
              <div>{item.card.reps}</div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Explore;
