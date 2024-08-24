import { Component, createSignal } from "solid-js";
import { Game } from "~/Game";
import SelectDropdown from "./SelectDropdown";
import { ChessColor } from "~/lib/common";
import { Button } from "@kobalte/core/button";

const GameInterfaceCard: Component<{
  game: Game;
}> = (props) => {
  const [playerColor, setPlayerColor] = createSignal(ChessColor.White);
  const [opponent, setOpponent] = createSignal<string>("none");

  const set_opponent = (val: string) => {
    setOpponent(val);
    props.game.set_opponent(val === "computer" ? true : false);
  };

  const set_color = (color: ChessColor) => {
    setPlayerColor(color);
    props.game.set_orientation(color);
  };

  return (
    <div class="card bg-lum-100 border-lum-200 text-lum-900">
      <div class="card-header bg-lum-200">Game</div>

      <div class="p-2">
        <SelectDropdown
          label="Color"
          options={[ChessColor.White, ChessColor.Black]}
          value={playerColor()}
          on_update={(c) => set_color(c as ChessColor)}
        ></SelectDropdown>
        <SelectDropdown
          label="Opponent"
          options={["computer", "none"]}
          value={opponent()}
          on_update={set_opponent}
        ></SelectDropdown>
        <Button class="button mt-2" onClick={() => props.game.restart()}>
          Restart
        </Button>
      </div>
    </div>
  );
};

export default GameInterfaceCard;
