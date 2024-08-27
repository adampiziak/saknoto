import { Component } from "solid-js";
import { Game } from "~/Game";
import OpeningCard from "./OpeningCard";
import { BoardView } from "~/BoardView";
import GameInterfaceCard from "./GameInterfaceCard";
import EngineCard from "./EngineCard";
import RepertoireCard from "./RepertoireCard";

const HomeDesktop: Component<{ game: Game }> = (props) => {
  return (
    <div class="home-desktop flex min-h-0 shrink pb-4 px-4 dark:bg-accent-950 bg-accent-50 sn-main relative">
      <div class="home-left-column flex sk-fit shrink overflow-visible sn-opening-card">
        <OpeningCard
          pgn={[]}
          on_select={(move) => props.game.handle_move(move)}
          game={props.game}
        />
      </div>
      <BoardView class="grow shrink" game={props.game} rounded={true} />
      <div class="flex flex-col gap-4 w-[500px] h-[100%] min-h-0 shrink px-4 sn-info-card">
        <GameInterfaceCard game={props.game} />
        <RepertoireCard game={props.game} />
        <EngineCard
          game={props.game}
          onSelect={(move: string) => props.game.play_move(move)}
          onHover={(moves) => props.game.drawArrows(moves)}
        />
      </div>
    </div>
  );
};

export default HomeDesktop;
