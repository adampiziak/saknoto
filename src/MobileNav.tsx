import { Component, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "./Context";
import { CgClose } from "solid-icons/cg";
import { Link } from "@kobalte/core/link";
import { BsX } from "solid-icons/bs";
import { useGame } from "./GameProvider";
import { Button } from "@kobalte/core/button";
import { RiDesignContrastDrop2Fill } from "solid-icons/ri";
import { LRUCache } from "./data/Cache";

const MobileNav: Component = () => {
  const context = useSaknotoContext();
  const [active, setActive] = createSignal(false);

  onMount(() => {
    context.ui.mobilenav.on(({ active }: { active: boolean }) => {
      setActive(active);
    });
  });

  const close = () => {
    context.ui.mobilenav.set({ active: false });
  };

  const clearCache = () => {
    const cache = new LRUCache("computer-move");
    cache.clear();
    context.engine.clear_cache();
  };

  return (
    <div
      class={
        "sn-mobile-nav bg-lum-50 text-lum-800 flex flex-col absolute h-screen w-screen left-0 top-0 " +
        `${active() ? "z-50" : "-z-10"}`
      }
    >
      <div class="flex items-center justify-between relative p-2">
        <div class="text-2xl sn-logo   text-accent-700 ml-3">
          <span class="font-medium dark:text-accent-300  text-accent-700 ">
            ŝak
          </span>
          <span class="font-medium dark:text-accent-400 text-accent-600">
            noto.org
          </span>
        </div>
        <div
          class="text-accent-800 h-12 w-12 flex items-center justify-center"
          onClick={() => {
            context.ui.mobilenav.set({ active: false });
          }}
        >
          <BsX size={52} />
        </div>
      </div>
      <nav class="flex flex-col items-center gap-2 mt-8">
        <Link class="sn-link" href="/" onClick={close}>
          Home
        </Link>
        <Link class="sn-link" href="/study/flashcards" onClick={close}>
          Study
        </Link>
        <Link class="sn-link" href="/explore" onClick={close}>
          Explore
        </Link>
        <Link class="sn-link" href="/learn" onClick={close}>
          learn
        </Link>
      </nav>
      <Button
        class="button border-lum-300 text-lum-700 bg-lum-100 mt-10"
        onclick={clearCache}
      >
        Clear cache
      </Button>
    </div>
  );
};

export default MobileNav;
