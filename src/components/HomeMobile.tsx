import {
  Component,
  createSignal,
  Match,
  onMount,
  ParentComponent,
  Switch,
} from "solid-js";
import { BoardView, BoardViewMode } from "~/BoardView";
import { useGame } from "~/GameProvider";
import {
  FaSolidChessPawn,
  FaSolidComputer,
  FaSolidEllipsis,
  FaSolidFloppyDisk,
  FaSolidGears,
  FaSolidGrip,
  FaSolidSquarePollHorizontal,
  FaSolidUpLong,
} from "solid-icons/fa";
import { useDeviceWidth } from "~/lib/hooks";
import OpeningCard from "./OpeningCard";
import RepertoireCard from "./RepertoireCard";
import EngineCard from "./EngineCard";
import ExplorerCard from "./ExplorerCard";
import GameInterfaceCard from "./GameInterfaceCard";
import {
  RiArrowsDragMove2Fill,
  RiArrowsExpandUpDownFill,
  RiArrowsExpandUpDownLine,
} from "solid-icons/ri";
import { BiSolidChevronsUp } from "solid-icons/bi";

const HomeMobile: Component = (props) => {
  const [boardRect, setBoardRect] = createSignal(0);
  const [selected, setSelected] = createSignal("opening");
  const windowWidth = useDeviceWidth();
  const [containerSize, setContainerSize] = createSignal(windowWidth());
  const [offset, setOffset] = createSignal(0);

  const game = useGame();

  let startY = undefined;
  let initialSize = 0;
  let boardMin = 100;
  let boardMax = 1000;
  const clamp = (val: number, min: number, max: number) =>
    Math.min(Math.max(val, min), max);

  const fromTouchMove = (e: TouchEvent) => {
    const deltaY = startY - e.targetTouches[0].clientY;
    // console.log(deltaY);
    const newsize = clamp(initialSize - deltaY, 200, windowWidth());
    console.log(newsize);
    setContainerSize(newsize);
  };

  const [isMaxSize, setIsMaxSize] = createSignal(true);

  const nearest = (val: number, roundTo: number) =>
    Math.floor(val * roundTo) / roundTo;

  const fromTouchStart = (e: TouchEvent) => {
    initialSize = nearest(clamp(containerSize(), 100, windowWidth()), 8);
    startY = e.targetTouches[0].clientY;
    boardMax = windowWidth();
  };
  const fromTouchEnd = () => {
    setIsMaxSize(containerSize() >= windowWidth());
  };

  const fromMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1 && startY !== undefined) {
      // const newsize = clamp(initialSize + e.movementY * 2, 200, windowWidth());
      // console.log(newsize);
      setContainerSize((prev) => clamp(prev + e.movementY, boardMin, boardMax));
    }
  };

  const fromMouseEnd = (e: MouseEvent) => {
    startY = undefined;
  };

  const fromMouseStart = (e: MouseEvent) => {
    initialSize = nearest(clamp(containerSize(), 100, windowWidth()), 8);
    startY = e.clientY;
    boardMax = windowWidth();
  };

  onMount(() => {
    setContainerSize(windowWidth());
  });

  const TabButton: ParentComponent<{ val: string }> = (props) => {
    return (
      <div
        onclick={() => setSelected(props.val)}
        class={`w-full py-3 px-1 mx-2 rounded-xl flex items-center justify-center active:bg-lum-100 active:text-lum-800 border-lum-200 ${props.val === selected() ? "text-lum-800 bg-lum-100" : ""}`}
      >
        {props.children}
      </div>
    );
  };
  const iconSize = 18;

  return (
    <div
      class="home-mobile flex-col max-w-screen w-full grow relative bg-lum-50 min-h-0 "
      onmousemove={fromMouseMove}
      onmouseup={fromMouseEnd}
    >
      <div
        style={{
          height: `${containerSize()}px`,
          width: `100vw`,
        }}
        class="flex max-h-[100vw] min-h-[200px] grow-0 shrink-0 items-center justify-center"
      >
        <BoardView
          mode={BoardViewMode.COLUMN}
          useEngine={true}
          rounded={true}
          gameId="home"
          class="items-center justify-center min-h-[200px]"
          boardClass={`overflow-hidden flex  w-full rounded-lg`}
        />
      </div>
      <div
        class="text-lum-800 flex justify-center py-3 gap-2"
        ontouchstart={fromTouchStart}
        ontouchmove={fromTouchMove}
        ontouchend={fromTouchEnd}
        onmousedown={fromMouseStart}
      >
        <div class="drag-dot bg-lum-300 rounded-full"></div>
        <div class="drag-dot bg-lum-300 rounded-full"></div>
        <div class="drag-dot bg-lum-300 rounded-full"></div>
        <div class="drag-dot bg-lum-300 rounded-full"></div>
      </div>
      <div class="bg-lum-50 text-lum-800 grow rounded-2xl shrink flex min-w-0 min-h-0 overflow-hidden gap-2 mx-2">
        <div class="flex content grow bg-lum-100 rounded-2xl shrink min-w-0 overflow-hidden min-h-0">
          <Switch>
            <Match when={selected() === "opening"}>
              <OpeningCard />
            </Match>
            <Match when={selected() === "repertoire"}>
              <RepertoireCard />
            </Match>
            <Match when={selected() === "engine"}>
              <EngineCard />
            </Match>
            <Match when={selected() === "explorer"}>
              <ExplorerCard />
            </Match>
            <Match when={selected() === "settings"}>
              <GameInterfaceCard />
            </Match>
          </Switch>
        </div>
        <div class="tabs flex flex-col justify-start  text-lum-600 items-center gap-2">
          <TabButton val="opening">
            <FaSolidChessPawn size={iconSize} />
          </TabButton>
          <TabButton val="repertoire">
            <FaSolidFloppyDisk />
          </TabButton>
          <TabButton val="engine">
            <FaSolidComputer size={iconSize} />
          </TabButton>
          <TabButton val="explorer">
            <FaSolidSquarePollHorizontal size={iconSize} />
          </TabButton>
          <TabButton val="settings">
            <FaSolidGears size={iconSize} />
          </TabButton>
        </div>
      </div>
    </div>
  );
};
// <BottomActions />

export default HomeMobile;
