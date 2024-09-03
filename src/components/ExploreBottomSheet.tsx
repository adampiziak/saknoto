import {
  createEffect,
  createSignal,
  For,
  JSX,
  ParentComponent,
  Show,
} from "solid-js";
import { Component } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { startingFen } from "~/utils";
import EngineCard from "./EngineCard";
import GameInterfaceCard from "./GameInterfaceCard";
import { useGame } from "~/GameProvider";
import { PositionOpenings } from "./PositionOpenings";

const ExploreBottomSheet: Component = () => {
  const game = useGame()!;
  const [fen, setFen] = createSignal(startingFen());
  const [rep, setRep] = createSignal<any>(null);
  const context = useSaknotoContext();
  const [currentView, setCurrentView] = createSignal<
    "position" | "engine" | "settings"
  >("position");

  game.subscribe(({ fen }) => {
    setFen(fen);
  });

  createEffect(() => {
    // on fen

    context.repertoire.getLine(fen()).then((val) => {
      if (val?.response) {
        setRep(val?.response);
      } else {
        setRep([]);
      }
    });
  });

  const ViewAction: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
    props,
  ) => {
    return (
      <div
        class="bg-lum-200 p-2 hover:cursor-pointer rounded active:bg-lum-300"
        {...props}
      >
        {props.children}
      </div>
    );
  };

  const response = (move: string) => {
    return (
      <div
        class="p-2 bg-lum-200 rounded-lg font-bold text-lum-700"
        onclick={() => game.playMove(move)}
      >
        <div>{move}</div>
      </div>
    );
  };

  return (
    <div class="flex flex-col bg-lum-100 text-lum-900 grow px-4 max-h-screen">
      <div class="flex py-1 gap-5 mb-2 justify-start w-screen overflow-auto grow shrink-0">
        <ViewAction onclick={() => setCurrentView("position")}>
          position
        </ViewAction>
        <ViewAction onclick={() => setCurrentView("engine")}>engine</ViewAction>
        <ViewAction onclick={() => setCurrentView("settings")}>
          settings
        </ViewAction>
      </div>
      <Show when={currentView() === "position"}>
        <PositionOpenings />
      </Show>
      <Show when={currentView() === "engine"}>
        <EngineCard />
      </Show>
      <Show when={currentView() === "settings"}>
        <GameInterfaceCard />
      </Show>
    </div>
  );
};

export default ExploreBottomSheet;
