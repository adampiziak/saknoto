import { createSignal, ParentComponent, Suspense } from "solid-js";
import BottomBar from "./components/BottomBar";
import { useUserInterface } from "./Context";
import { A, useNavigate } from "@solidjs/router";
import { FaSolidArrowRotateLeft, FaSolidCircleArrowLeft } from "solid-icons/fa";
import { GameProvider } from "./GameProvider";
import MobileSideView from "./components/MobileSideView";

const MobileLayout: ParentComponent = (props) => {
  const ui = useUserInterface();
  const [openNav, setOpenNav] = createSignal(false);
  ui.mobilenav.on(({ active }) => {
    setOpenNav(active);
  });

  return (
    <GameProvider>
      <div class="bg-lum-50 h-dvh w-screen flex flex-col">
        <div class={`grow min-h-0 shrink overflow-hidden`}>
          <div
            class={`mobile-container flex h-full w-[200vw] ${openNav() ? "nav" : ""}`}
          >
            <div
              class={`h-full w-screen flex grow shrink min-h-0 [&>*]:grow [&>*]:shrink `}
            >
              <Suspense>{props.children}</Suspense>
            </div>
            <MobileSideView />
          </div>
        </div>
        <BottomBar />
      </div>
    </GameProvider>
  );
};

export default MobileLayout;
