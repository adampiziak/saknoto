import { Component, createSignal } from "solid-js";
import { BoardView, BoardViewMode } from "~/BoardView";
import { Game } from "~/Game";
import PositionContextualCard from "./PositionContextComponent";
import BottomSheet from "./BottomSheet";
import BottomActions from "./BottomActions";

const HomeMobile: Component<{ game: Game }> = (props) => {
  const [boardRect, setBoardRect] = createSignal(0);
  return (
    <div class="home-mobile flex-col max-w-screen w-full relative">
      <BoardView
        game={props.game}
        mode={BoardViewMode.COLUMN}
        onResize={(rect) => setBoardRect(rect.bottom)}
      />
      <BottomSheet initialY={boardRect()}>
        <PositionContextualCard game={props.game} />
      </BottomSheet>
      <BottomActions game={props.game} />
    </div>
  );
};

export default HomeMobile;
