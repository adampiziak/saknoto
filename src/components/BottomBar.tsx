import { CustomIcon } from "solid-icons";
import {
  FaSolidAnglesUp,
  FaSolidArrowLeft,
  FaSolidArrowRotateLeft,
  FaSolidBars,
  FaSolidChevronLeft,
  FaSolidChevronRight,
  FaSolidPlus,
  FaSolidXmark,
} from "solid-icons/fa";
import { HiOutlineBars2 } from "solid-icons/hi";
import { Component, createSignal, ParentComponent, Show } from "solid-js";
import { useUserInterface } from "~/Context";
import { useGame } from "~/GameProvider";

const iconSize = 16;
const BottomBar: Component = () => {
  const ui = useUserInterface();
  const game = useGame();
  const [open, setOpen] = createSignal(false);
  ui.mobilenav.on(({ active }) => {
    setOpen(active);
  });
  const ActionButton: ParentComponent<{ onclick: any }> = (props) => {
    return (
      <div
        class="h-full w-12  rounded-full flex items-center justify-center active:bg-lum-200 border-lum-200 "
        onclick={props.onclick}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div
      class={`overflow-hidden items-center z-40 bg-lum-50 text-lum-950 bottom-0 flex shadow-lg gap-2 px-2 py-2 ${open() ? "justify-center" : "justify-normal"}`}
    >
      <div class={`bottom-actions grow shrink ${open() ? "nav-mode" : "flex"}`}>
        <div
          class={`text-lum-700 font-medium bg-lum-100 h-10 flex rounded-full  items-center grow justify-between gap-0`}
        >
          <ActionButton onclick={() => game.undoMove()}>
            <FaSolidChevronLeft size={iconSize} />
          </ActionButton>
          <ActionButton onclick={() => game.redoMove()}>
            <FaSolidChevronRight size={iconSize} />
          </ActionButton>
          <ActionButton onclick={() => game.restartSlow()}>
            <FaSolidArrowRotateLeft size={iconSize} />
          </ActionButton>
          <ActionButton>
            <FaSolidPlus size={iconSize} />
          </ActionButton>
          <ActionButton>
            <FaSolidAnglesUp size={iconSize} />
          </ActionButton>
        </div>
      </div>
      <div
        class={`shrink min-w-0 justify-center flex h-10 rounded-full text-lum-700 ${open() ? "bg-lum-200 grow" : "w-10"}`}
        onClick={() => ui.mobilenav.toggle()}
      >
        <Show
          when={open()}
          fallback={
            <div class="bar2 flex flex-col justify-center h-full overflow-hidden">
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          }
        >
          <div class="h-full flex items-center gap-4 font-semibold justify-center">
            <FaSolidArrowLeft />
            <div class="">back</div>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default BottomBar;
