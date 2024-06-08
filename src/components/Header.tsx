import { useSakarboContext } from "~/app";
import SyncDialog from "./SyncDialog";
import ThemeSelector from "./ThemeSelector";
import { RefreshIcon } from "~/icons";
import { createSignal, onMount } from "solid-js";

export default function Header() {
  const context = useSakarboContext();

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
    if (context.userManager.get()) {
      await refresh();
    }
  });

  return (
    <header class="relative z-1 px-6 py-3 border-b border-slate-300 dark:border-zinc-700 flex flex-wrap items-center">
      <div class="basis-0">
        <div class="text-2xl opacity-90 font-normal font-['Lexend']">
          ŝakarbo
        </div>
      </div>
      <nav class="flex gap-1 ml-8 *:font-['Lexend']">
        <a href="/" class="px-2 py-1 hover:bg-main-hover rounded">
          play
        </a>
        <a href="/study" class="px-2 py-1 hover:bg-main-hover rounded">
          study
        </a>
        <a href="/create" class="px-2 py-1 hover:bg-main-hover rounded">
          create
        </a>
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
