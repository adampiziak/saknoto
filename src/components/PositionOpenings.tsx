import { Component, createSignal, For, onMount } from "solid-js";
import { useGame } from "~/GameProvider";
import { startingFen } from "~/utils";

interface JsonPosition {
  fen: string;
  move_count: number;
  openings: JsonOpening[];
}
interface JsonOpening {
  count: number;
  eco: string;
  name: string[];
  moves: string[];
}

export const PositionOpenings: Component = () => {
  const game = useGame();
  const [openings, setOpenings] = createSignal<JsonOpening[]>([]);
  const [positionCount, setPositionCount] = createSignal(0);

  let table: Map<string, JsonPosition> = new Map();
  game.subscribe(({ fen }) => {
    updatePosition(fen);
  });

  const updatePosition = async (fen: string) => {
    const position = table.get(fen);
    if (position) {
      setOpenings(position.openings.toSorted((a, b) => b.count - a.count));
      setPositionCount(position.move_count);
    }
  };

  onMount(async () => {
    const res = await fetch("/opening_tree.json");
    const json = await res.json();
    table = new Map(Object.entries(json));
    updatePosition(startingFen());
  });

  return (
    <div class="shrink grow overflow-y-auto">
      <div>
        <For each={openings()}>
          {(it, _) => (
            <div>
              {Math.round((it.count / positionCount()) * 100)}%: {it.name}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
