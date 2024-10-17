import { createEffect, createSignal, ParentComponent } from "solid-js";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { GameOption, GameProvider } from "./GameProvider";
import { useKeyDownEvent } from "@solid-primitives/keyboard";

const DesktopLayout: ParentComponent = (props) => {
  const event = useKeyDownEvent();
  let [game, setGame] = createSignal<GameOption>();

  createEffect(() => {
    const ev = event();
    const g = game();
    if (ev && g) {
      if (ev.key === "ArrowLeft") {
        g.undoMove();
      }

      if (ev.key === "ArrowRight") {
        g.redoMove();
      }
    }
  });

  return (
    <GameProvider onGame={(g) => setGame(g())}>
      <div class="deskop-layout h-screen w-screen flex flex-col">
        <Header />
        <div class="id-1 flex grow shrink min-h-0 [&>*]:grow [&>*]:shrink">
          {props.children}
        </div>
        <SideBar />
      </div>
    </GameProvider>
  );
};

export default DesktopLayout;
