import { Component } from "solid-js";
import { Game } from "~/Game";
import OpeningCard from "./OpeningCard";
import { BoardView } from "~/BoardView";
import GameInterfaceCard from "./GameInterfaceCard";
import EngineCard from "./EngineCard";
import RepertoireCard from "./RepertoireCard";
import { GameProvider } from "~/GameProvider";

const HomeDesktop: Component = (props) => {
  return (
    <GameProvider game_id="home">
      <div class="home-desktop flex min-h-0 shrink w-screen pb-4 px-4 bg-lum-50 sn-main relative">
        <div class="home-left-column flex sk-fit shrink overflow-visible sn-opening-card">
          <OpeningCard
            pgn={[]}
            on_select={(move) => props.game.handle_move(move)}
          />
        </div>
        <BoardView class="grow shrink" rounded={true} useEngine={true} />
        <div class="flex flex-col gap-4 w-[500px] h-[100%] min-h-0 shrink px-4 sn-info-card">
          <GameInterfaceCard />
          <RepertoireCard />
          <EngineCard
          // onSelect={(move: string) => props.game.playMove(move)}
          // onHover={(moves) => props.game.drawArrows(moves)}
          />
        </div>
      </div>
    </GameProvider>
  );
};

export default HomeDesktop;
