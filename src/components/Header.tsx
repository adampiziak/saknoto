import SyncDialog from "./SyncDialog";
import ThemeSelector from "./ThemeSelector";
import { RefreshIcon } from "~/icons";
import { createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import "../app.scss";
import { useSaknotoContext } from "~/Context";
import { NavigationMenu } from "@kobalte/core/navigation-menu";

export default function Header() {
  const context = useSaknotoContext();
  // return (
  //   <header>
  //     <nav>
  //       <A href="/">main</A>
  //       <A href="/study">study</A>
  //     </nav>
  //   </header>
  // );

  const [refreshing, setRefreshing] = createSignal(false);
  const [user, setUser] = createSignal("user");
  const refresh = async () => {
    if (typeof window === "undefined") {
      return;
    }
    setRefreshing(true);
    await context.openingGraph.refresh();
    setTimeout(() => setRefreshing(false), 1000);
  };

  // <span class="dark:font-bold font-medium dark:opacity-100 ">ŝak</span>
  onMount(async () => {
    await context.openingGraph.load_wait();
    await refresh();
    context.userManager.load();
    let u = context.userManager.get();

    if (u) {
      setUser(u);
    } else {
      setUser("user");
    }
  });

  return (
    <header class="relative px-6 z-40 py-4  border-accent-300 dark:border-zinc-700 flex flex-wrap items-center  dark:text-accent-100 text-accent-900 dark:bg-accent-950 bg-accent-50">
      <div class="basis-0 grow flex">
        <div class="text-2xl sn-logo  text-right grow text-accent-700 ">
          <span class="font-medium dark:text-accent-300  text-accent-700 ">
            ŝak
          </span>
          <span class="font-medium dark:text-accent-400 text-accent-600">
            noto.org
          </span>
        </div>
      </div>
      <NavigationMenu
        delayDuration={0}
        class="flex justify-center items-center w-[max-content] grow gap-3 ml-8"
      >
        <NavigationMenu.Trigger as="a" href="/" class="sn-menu-trigger">
          play
        </NavigationMenu.Trigger>
        <NavigationMenu.Menu>
          <NavigationMenu.Trigger
            class="sn-menu-trigger"
            as="a"
            href="/study/flashcards"
          >
            study
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content class="sn-nav-content">
              <NavigationMenu.Item class="sn-nav-item" href="/study/flashcards">
                <NavigationMenu.ItemLabel class="sn-nav-label">
                  practice
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="sn-nav-desc">
                  quiz yourself on positions from your repertoire
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="sn-nav-item" href="/study/repertoire">
                <NavigationMenu.ItemLabel class="sn-nav-label">
                  repertoire
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="sn-nav-desc">
                  Your saved positions
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>
        <NavigationMenu.Menu>
          <NavigationMenu.Trigger
            as="a"
            href="/explore"
            class="sn-menu-trigger"
          >
            tools
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content class="sn-nav-content">
              <NavigationMenu.Item class="sn-nav-item" href="/explore">
                <NavigationMenu.ItemLabel class="sn-nav-label">
                  position explorer
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="sn-nav-desc">
                  Table of played positions
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
              <NavigationMenu.Item class="sn-nav-item" href="/tools/builder">
                <NavigationMenu.ItemLabel class="sn-nav-label">
                  repertoire builder
                </NavigationMenu.ItemLabel>
                <NavigationMenu.ItemDescription class="sn-nav-desc">
                  find positions to improve your openings
                </NavigationMenu.ItemDescription>
              </NavigationMenu.Item>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>
        <NavigationMenu.Viewport class="flex items-center justify-center saknoto-nav-viewport rounded lvl-2 outline-none shadow border">
          <NavigationMenu.Arrow />
        </NavigationMenu.Viewport>
      </NavigationMenu>
      <div class="items-center flex flex-grow justify-end gap-4">
        <ThemeSelector />
        <RefreshIcon
          class={`w-5 h-5 ${refreshing() ? "animate-spin" : ""}`}
          onClick={() => refresh()}
        />
        <div
          onClick={() => context.ui.sidebar.set({ active: true, view: "user" })}
          class="border border-accent-100 dark:border-accent-600 px-3 py-0.5 rounded-full hover:bg-accent-500 hover:cursor-pointer"
        >
          {user()}
        </div>
      </div>
    </header>
  );
}
