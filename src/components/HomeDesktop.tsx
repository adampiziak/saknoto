import { Component } from "solid-js";
import { Game } from "~/Game";
import OpeningCard from "./OpeningCard";
import { BoardView } from "~/BoardView";
import GameInterfaceCard from "./GameInterfaceCard";
import EngineCard from "./EngineCard";
import RepertoireCard from "./RepertoireCard";
import { GameProvider } from "~/GameProvider";
import ExplorerCard from "./ExplorerCard";

const HomeDesktop: Component = (props) => {
  return (
    <div class="home-desktop flex min-h-0 shrink w-screen pb-4 px-4 bg-lum-50 gap-2 sn-main relative">
      <div class="home-left-column grow flex sk-fit shrink-0 overflow-hidden sn-opening-card max-w-[400px] rounded-xl min-w-[300px] bg-lum-100/30">
        <OpeningCard
          pgn={[]}
          on_select={(move) => props.game.handle_move(move)}
        />
      </div>
      <BoardView
        class="grow-[2] min-w-[400px] shrink"
        rounded={true}
        gameId="home"
        useEngine={true}
      />
      <div class="flex grow flex-col gap-4 max-w-[400px] h-[100%] min-h-0 shrink px-4 sn-info-card">
        <GameInterfaceCard />
        <RepertoireCard />
        <ExplorerCard />
        <EngineCard
        // onSelect={(move: string) => props.game.playMove(move)}
        // onHover={(moves) => props.game.drawArrows(moves)}
        />
      </div>
    </div>
  );
};

export default HomeDesktop;
