import { Progress } from "@kobalte/core/progress";
import { Button } from "@kobalte/core/button";
import { Component, createSignal, For, Show } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { onMount } from "solid-js";
import { getTurn } from "~/utils";

const RepertoireBuilder: Component = () => {
  const context = useSaknotoContext();
  const [p, setProgress] = createSignal(0);
  const [text, setText] = createSignal<string[]>([]);
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  onMount(async () => {
    await context.engine.wait();
  });

  const log = (msg: any) => {
    setText((prev) => [...prev, `${msg}`]);
  };
  const logOverwrite = (msg: string) => {
    setText((prev) => [...prev.slice(0, -1), msg]);
  };
  const build = async () => {
    setText([]);
    setProgress(2);
    log(`fetching positions`);
    const res = await context.openingGraph.getMostCommonPositions("white");
    log(`found ${res.length} positions`);
    setProgress(10);
    log(`sorting...`);
    res.sort((a, b) => b.count - a.count);
    log(`narrowed down 100 positions`);
    setProgress(14);
    const count = 120;
    const narrowed = res.slice(0, count);
    const incre = (80 - 14) / count;
    let i = 0;
    const allEvals = [];
    log("Analyzing...");
    log("");
    for (const p of narrowed) {
      const evl = await context.engine.wait_for(p.fen);
      allEvals.push(evl);
      logOverwrite(`${i}%`);
      i += 1;
      setProgress((p) => p + incre);
    }

    for (const e of allEvals) {
      const res = await context.openingGraph.getPosition(
        e.fen,
        "white",
        getTurn(e.fen),
      );
      const e_moves: (string | undefined)[] = e.lines.map((m) =>
        m.san.at(0)?.toLowerCase(),
      );
      const p_moves = Object.entries(res?.moves).map((m) =>
        m[1].uci.toLowerCase(),
      );
      let good = false;
      for (const p of p_moves) {
        if (e_moves.includes(p)) {
          good = true;
          break;
        }
      }
      if (!good) {
        log(
          `${res?.fen}: ${Math.round((res?.result.white * 100) / (res?.result.black + res?.result.white + res?.result.draw))}%`,
        );
      }
    }
  };
  return (
    <div class="flex justify-center">
      <div class="grow  border-r border-zinc-700">
        <div class="flex p-4 flex-col">
          <Button class="button" onClick={() => build()}>
            build
          </Button>
          <Progress value={p()}>
            <div class="flex">
              <Progress.Label>
                {p() < 100 ? "Loading..." : "done!"}
              </Progress.Label>
              <Show when={p() < 100}>
                <Progress.ValueLabel />
              </Show>
            </div>
            <Progress.Track class="h-2 w-full bg-gray-700">
              <Progress.Fill class="w-[var(--kb-progress-fill-width)] h-full bg-red-50 transition-[width]" />
            </Progress.Track>
          </Progress>
        </div>
      </div>
      <div class="grow p-4 overflow-y-auto">
        <For each={text()}>{(item, index) => <div>{item}</div>}</For>
      </div>
    </div>
  );
};
export default RepertoireBuilder;
