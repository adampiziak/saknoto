import { Component, createSignal } from "solid-js";
import {
  defaultGameState,
  Game,
  GameState,
  PlayerKind,
  PlayerKindKey,
} from "~/Game";
import SelectDropdown from "./SelectDropdown";
import { ChessColor } from "~/lib/common";
import { Button } from "@kobalte/core/button";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
import { QRCodeSVG } from "solid-qr-code";
import SaknotoSwitch from "./SaknotoSwitch";
import { useGame } from "~/GameProvider";
import { getEnumKeys, chessMoveThrottle } from "~/utils";

const GameInterfaceCard: Component = (props) => {
  const game = useGame()!;
  const [state, setState] = createSignal<GameState>(defaultGameState());
  const [playerColor, setPlayerColor] = createSignal(ChessColor.White);
  const [opponent, setOpponent] = createSignal<string>("none");
  const [myuuid, setMyUuid] = createSignal<string>("");
  const [peerstatus, setPeerStatus] = createSignal<string>("Waiting");
  const [playuntilrep, setplayuntilrep] = createSignal<boolean>(false);

  game.subscribeState((s) => {
    setState(s);
  });

  const setOpponentKind = (key: string) => {
    const opt: PlayerKind = PlayerKind[key as PlayerKindKey];
    game.setOpponentType(opt);
  };

  const set_color = (color: ChessColor) => {
    setPlayerColor(color);
    game.setPlayerColor(color);
    game.setOrientation(color);
  };

  let t = new Date();
  const test = chessMoveThrottle(() => {
    const n = new Date();
    console.log(n.getTime() - t.getTime());
    t = n;
    console.log("hey!");
  }, 500);

  return (
    <div class="card bg-lum-100 border-lum-200 text-lum-900">
      <div class="card-header bg-lum-200">Game</div>

      <div class="p-2">
        <SelectDropdown
          label="Color"
          options={[ChessColor.White, ChessColor.Black]}
          value={state().player.color}
          on_update={(c) => set_color(c as ChessColor)}
        ></SelectDropdown>
        <SelectDropdown
          label="Opponent"
          options={getEnumKeys(PlayerKind)}
          value={PlayerKind[state().opponent.kind]}
          on_update={setOpponentKind}
        ></SelectDropdown>
        <div class="flex flex-col">
          <Button
            class="button mt-2 bg-lum-200 border-lum-300 text-lum-600"
            onClick={() => game.restartSlow()}
          >
            Restart
          </Button>
          <Button
            class="button mt-2 bg-lum-200 border-lum-300 text-lum-600"
            onClick={() => game.playCommonMove()}
          >
            Play common move
          </Button>
          <SaknotoSwitch
            checked={state().autoplayRepertoire}
            onChange={(val) => game.setRepertoireAutoPlay(val)}
          >
            Autoplay repertoire
          </SaknotoSwitch>
        </div>
      </div>
    </div>
  );
};

export default GameInterfaceCard;
