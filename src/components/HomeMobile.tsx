import { Component, createSignal } from "solid-js";
import { BoardView, BoardViewMode } from "~/BoardView";
import PositionContextualCard from "./PositionContextComponent";
import BottomSheet from "./BottomSheet";
import BottomActions from "./BottomActions";
import { GameProvider } from "~/GameProvider";

const HomeMobile: Component = (props) => {
  const [boardRect, setBoardRect] = createSignal(0);
  return (
    <GameProvider game_id="home">
      <div class="home-mobile flex-col max-w-screen w-full relative">
        <BoardView
          mode={BoardViewMode.COLUMN}
          useEngine={true}
          onResize={(rect) => setBoardRect(rect)}
        />
        <BottomSheet initialY={boardRect()}>
          <PositionContextualCard game={props.game} />
        </BottomSheet>
        <BottomActions game={props.game} />
      </div>
    </GameProvider>
  );
};

export default HomeMobile;
