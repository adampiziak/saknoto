import SyncDialog from "./SyncDialog";
import ThemeSelector from "./ThemeSelector";
import { RefreshIcon } from "~/icons";
import { createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import "../app.scss";
import { useSakarboContext } from "~/Context";

export default function Header() {
  const context = useSakarboContext();
  // return (
  //   <header>
  //     <nav>
  //       <A href="/">main</A>
  //       <A href="/study">study</A>
  //     </nav>
  //   </header>
  // );

  const [refreshing, setRefreshing] = createSignal(false);
  const refresh = async () => {
    if (typeof window === "undefined") {
      return;
    }
    setRefreshing(true);
    await context.openingGraph.refresh();
    setTimeout(() => setRefreshing(false), 1000);
  };

  onMount(async () => {
    // if (context.userManager.get()) {
    //   await refresh();
    // }
  });

  return (
    <header class="relative z-1 px-6 py-2 border-b border-slate-300 dark:border-zinc-700 flex flex-wrap items-center">
      <div class="basis-0">
        <div class="text-2xl opacity-90 font-medium">ŝakarbo</div>
      </div>
      <nav class="flex gap-1 ml-8 *:font-['Lexend']">
        <A href="/" class="px-2 py-1 hover:bg-main-hover rounded">
          play
        </A>
        <A href="/study" class="px-2 py-1 hover:bg-main-hover rounded">
          study
        </A>
        <A href="/explore" class="px-2 py-1 hover:bg-main-hover rounded">
          explore
        </A>
      </nav>
      <div class="items-center flex flex-grow justify-end gap-4">
        <ThemeSelector />
        <RefreshIcon
          class={`w-5 h-5 ${refreshing() ? "animate-spin" : ""}`}
          onClick={() => refresh()}
        />
        <SyncDialog />
      </div>
    </header>
  );
}
