import {
  Component,
  createEffect,
  createSignal,
  Match,
  onMount,
  ParentComponent,
  Switch,
} from "solid-js";
import { BoardView, BoardViewMode } from "~/BoardView";
import BottomSheet from "./BottomSheet";
import BottomActions from "./BottomActions";
import { GameProvider, useGame } from "~/GameProvider";
import ExploreBottomSheet from "./ExploreBottomSheet";
import {
  FaBrandsYoast,
  FaSolidCheckDouble,
  FaSolidChessPawn,
  FaSolidChevronLeft,
  FaSolidComputer,
  FaSolidFloppyDisk,
  FaSolidGear,
  FaSolidGears,
  FaSolidSquarePollHorizontal,
  FaSolidUserGroup,
} from "solid-icons/fa";
import { useDeviceWidth } from "~/lib/hooks";
import OpeningCard from "./OpeningCard";
import RepertoireCard from "./RepertoireCard";
import EngineCard from "./EngineCard";
import ExplorerCard from "./ExplorerCard";
import GameInterfaceCard from "./GameInterfaceCard";

const HomeMobile: Component = (props) => {
  const [boardRect, setBoardRect] = createSignal(0);
  const [selected, setSelected] = createSignal("opening");
  const windowWidth = useDeviceWidth();
  const [containerSize, setContainerSize] = createSignal(windowWidth());
  const [offset, setOffset] = createSignal(0);

  const game = useGame();

  let startY = 0;
  let initialSize = 0;
  const clamp = (val: number, min: number, max: number) =>
    Math.min(Math.max(val, min), max);

  const onMainScroll = (e) => {
    const deltaY = startY - e.targetTouches[0].clientY;
    setContainerSize(
      nearest(clamp(initialSize - deltaY, 200, windowWidth()), 8),
    );
  };

  const nearest = (val: number, roundTo: number) =>
    Math.floor(val * roundTo) / roundTo;

  const fromTouchStart = (e) => {
    initialSize = nearest(clamp(containerSize(), 100, windowWidth()), 8);
    startY = e.touches[0].clientY;
  };

  onMount(() => {
    setContainerSize((prev) => clamp(prev, 100, windowWidth()));
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
    <div class="home-mobile flex-col max-w-screen w-full grow relative bg-lum-50 min-h-0 shrink gap-2">
      <div
        style={{
          height: `${containerSize()}px`,
          width: `100vw`,
        }}
        class="flex shrink max-h-[100vw] min-h-[200px]  items-center justify-center"
      >
        <BoardView
          mode={BoardViewMode.COLUMN}
          useEngine={true}
          rounded={true}
          gameId="home"
          class="items-center justify-center min-h-[200px]"
          boardClass="overflow-hidden flex  w-full"
        />
      </div>
      <div class="bg-lum-50 text-lum-800 grow mx-2 rounded-2xl shrink flex min-w-0 overflow-hidden">
        <div
          class="content grow bg-lum-100 rounded-2xl shrink min-w-0 overflow-hidden"
          ontouchstart={fromTouchStart}
          ontouchmove={onMainScroll}
        >
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
        <div class="tabs flex flex-col justify-start items-start text-lum-600 mr-2 gap-2">
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
