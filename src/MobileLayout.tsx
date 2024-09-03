import { createSignal, ParentComponent, Suspense } from "solid-js";
import BottomBar from "./components/BottomBar";
import { useUserInterface } from "./Context";
import { A, useNavigate } from "@solidjs/router";
import { FaSolidArrowRotateLeft, FaSolidCircleArrowLeft } from "solid-icons/fa";
import { GameProvider } from "./GameProvider";

const MobileLayout: ParentComponent = (props) => {
  const ui = useUserInterface();
  const [openNav, setOpenNav] = createSignal(false);
  ui.mobilenav.on(({ active }) => {
    setOpenNav(active);
  });

  const nav = useNavigate();

  const goto = (dest: string) => {
    nav(dest);
    ui.mobilenav.deactivate();
  };

  const NavAction: ParentComponent<{ dest?: string }> = (props) => {
    return (
      <div
        class="bg-lum-200 text-lum-700 font-medium grow text-center active:bg-lum-300 p-2 rounded-lg"
        onclick={() => (props.dest ? goto(props.dest) : "")}
      >
        {props.children}
      </div>
    );
  };

  return (
    <GameProvider>
      <div class="bg-lum-50 h-screen w-screen flex flex-col">
        <div class={`grow min-h-0 shrink overflow-hidden`}>
          <div
            class={`mobile-container flex h-full w-[200vw] ${openNav() ? "nav" : ""}`}
          >
            <div
              class={`h-full w-screen flex grow shrink min-h-0 [&>*]:grow [&>*]:shrink `}
            >
              <Suspense>{props.children}</Suspense>
            </div>
            <div class="bg-lum-50 h-full w-screen p-8 flex flex-col justify-start">
              <div class="flex gap-4 items-center text-lum-700">
                <NavAction>username</NavAction>
                <NavAction>theme: hue-256</NavAction>
              </div>
              <div class="flex flex-col mt-8 gap-3">
                <NavAction dest="/">Home</NavAction>
                <NavAction dest="/study/flashcards">Study</NavAction>
              </div>
            </div>
          </div>
        </div>
        <BottomBar />
      </div>
    </GameProvider>
  );
};

export default MobileLayout;
