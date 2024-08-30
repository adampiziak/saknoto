import { Button } from "@kobalte/core/button";
import {
  Component,
  createEffect,
  createSignal,
  For,
  on,
  onMount,
  Show,
} from "solid-js";
// import { useSakarboContext } from "~/Context";
import { BoardView } from "~/BoardView";
import EngineCard from "~/components/EngineCard";
import ExplorerCard from "~/components/ExplorerCard";
import RepertoireCard from "~/components/RepertoireCard";
import { useSaknotoContext } from "~/Context";
import { Game } from "~/Game";
import { startingFen } from "~/utils";
import OpeningNameCard from "../../OpeningNameCard";
import OpeningCard from "~/components/OpeningCard";
import { useKeyDownEvent } from "@solid-primitives/keyboard";
import { Chess } from "chess.js";
import GameInterfaceCard from "~/components/GameInterfaceCard";
import PositionContext from "~/components/PositionContext";
import HomeDesktop from "~/components/HomeDesktop";
import HomeMobile from "~/components/HomeMobile";
import { useGame } from "~/GameProvider";
// import { Game } from "~/Game";

const PlayPage: Component = () => {
  const [pageWidth, setPageWidth] = createSignal(0);
  onMount(() => {
    setPageWidth(document.body.offsetWidth);
  });

  return (
    <>
      <Show when={pageWidth() < 1000} fallback={<HomeDesktop />}>
        <HomeMobile />
      </Show>
    </>
  );
};

export default PlayPage;
