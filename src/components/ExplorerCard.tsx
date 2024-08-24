import { Tabs } from "@kobalte/core/tabs";
import { Chess } from "chess.js";
import { Component, For, createEffect, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import "./ExplorerCard.scss";
import { Move } from "~/OpeningGraph";
import { DraggableIcon } from "~/icons";
import { STARTING_FEN } from "~/constants";

const ExplorerCard: Component<{
  fen: string | undefined | null;
  playerColor: "white" | "black";
  onSelect?: (m: string) => any;
}> = (props) => {
  const [selectedTab, setSelectedTab] = createSignal("player");
  const context = useSaknotoContext();
  let db_ready = false;

  const [moves, setMoves] = createSignal([]);
  const [nextMove, setNextMove] = createSignal(null);
  let lastgame = null;

  createEffect(async () => {
    const fen = props.fen;
    const player = props.playerColor;

    const g = new Chess();
    g.load(fen);
    const turn = g.turn() === "w" ? "white" : "black";
    if (lastgame?.moves) {
      const test = new Chess();
      for (const m of lastgame.moves) {
        const san = m.notation.notation;
        if (test.fen() === fen) {
          setNextMove(san);
          break;
        }

        test.move(san);
      }
    }

    await set_position(fen, player, turn);
  });

  onMount(async () => {
    await context.openingGraph.load_wait();
    db_ready = true;
    lastgame = JSON.parse(localStorage.getItem("lastgame"));
    const fen = props.fen;
    const player = props.playerColor;

    const g = new Chess();
    g.load(fen);

    const test = new Chess();
    for (const m of lastgame.moves) {
      const san = m.notation.notation;
      if (test.fen() === fen) {
        setNextMove(san);
        break;
      }

      test.move(san);
    }

    const turn = g.turn() === "w" ? "white" : "black";

    await set_position(fen, player, turn);
  });

  const set_position = async (
    fen: string,
    player: "white" | "black",
    turn: "white" | "black",
  ) => {
    if (!db_ready) {
      await context.openingGraph.load_wait();
      db_ready = true;
    }

    // console.log(fen);
    // console.log(player);
    // console.log(turn);
    // console.log(fen === STARTING_FEN);
    context.openingGraph.getFen(fen, player, turn).then((res) => {
      // console.log(res);
      setMoves(res);
    });
  };

  const emitSelection = (m: string) => {
    if (props.onSelect) {
      props.onSelect(m);
    }
  };

  const Line = (line: any) => {
    const move: Move = line[1];
    const total = move.result.black + move.result.white + move.result.draw;
    const whitePercent = Math.ceil((move.result.white / total) * 100);
    const blackPercent = Math.ceil((move.result.black / total) * 100);
    const drawPercent = Math.ceil((move.result.draw / total) * 100);

    const whitePercentText = whitePercent > 5 ? `${whitePercent}%` : "";
    const drawPercentText = drawPercent > 5 ? `${drawPercent}%` : "";
    const blackPercentText = blackPercent > 5 ? `${blackPercent}%` : "";

    return (
      <tr class="lvl-1 hoverable" onClick={() => emitSelection(move.uci)}>
        <td class="font-medium">
          {move.uci}
          <span class="px-1">{move.uci === nextMove() ? "*" : ""}</span>
        </td>
        <td>{move.count}</td>
        <td class="bg-pink relative w-full h-full ">
          <div class="flex *:text-center overflow-hidden *:h-4 *:leading-4 items-center rounded font-normal dark:font-medium border border-zinc-400/60 dark:border-0 ">
            <div
              class="dark:bg-accent-300 dark:text-accent-800 bg-accent-50 text-accent-600"
              style={{ width: `${whitePercent}%` }}
            >
              {whitePercentText}
            </div>
            <div
              class="dark:bg-accent-500 dark:text-accent-800 bg-accent-300 text-accent-700"
              style={{ width: `${drawPercent}%` }}
            >
              {drawPercentText}
            </div>
            <div
              class="dark:bg-accent-900 dark:text-accent-600 bg-accent-500 text-accent-50"
              style={{ width: `${blackPercent}%` }}
            >
              {blackPercentText}
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div class="bg-accent-100 text-accent-800 dark:bg-accent-800 dark:text-accent-100 border border-accent-200 dark:border-accent-700 rounded">
      <div class="bg-lum-200 card-header flex  items-center">
        <DraggableIcon class=" mr-1" />
        <div>Explorer</div>
      </div>
      <table class="sk-table">
        <thead>
          <tr class="*:font-normal">
            <th>move</th>
            <th>games</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          <For each={moves()}>{(item, index) => Line(item)}</For>
        </tbody>
      </table>
    </div>
  );
};

export default ExplorerCard;
// <Tabs value={selectedTab()} onChange={setSelectedTab}>
//   <Tabs.List class="relative sk-tabs">
//     <Tabs.Trigger value="lichess" class="selection:bg-green-100">
//       lichess
//     </Tabs.Trigger>
//     <Tabs.Trigger value="player">player</Tabs.Trigger>
//     <Tabs.Indicator class="absolute h-[2px] bg-[var(--level-3-border)] bottom-[-1px] " />
//   </Tabs.List>
// </Tabs>
