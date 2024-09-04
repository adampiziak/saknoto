import { FaSolidXmark } from "solid-icons/fa";
import { createSignal, onMount, ParentComponent, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { useUserInterface } from "~/Context";

const BottomBarContent: ParentComponent<{ mode: "main" | "nav" }> = (props) => {
  const [navActive, setNavActive] = createSignal(false);
  const [mountEl, setMountEl] = createSignal<Node | undefined>(undefined);
  const ui = useUserInterface();
  ui.mobilenav.on(({ active }) => {
    setNavActive(active);
  });

  onMount(() => {
    const el = document.getElementById("bottom-bar-content") as Node;
    setMountEl(el ?? undefined);
  });

  return (
    <>
      <Show when={props.mode === "main" && !navActive() && mountEl()}>
        <Portal mount={mountEl()}>
          <div class="flex grow h-full w-screen">
            <div class="flex  grow">{props.children}</div>
            <div
              class="bar2 flex flex-col h-full overflow-hidden w-12 items-center shrink-0 justify-center"
              onclick={() => ui.mobilenav.activate()}
            >
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
        </Portal>
      </Show>
      <Show when={props.mode === "nav" && navActive() && mountEl}>
        <Portal mount={mountEl()}>
          <div class="flex grow h-full w-screen">
            <div class="flex grow">{props.children}</div>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default BottomBarContent;
