import {
  FaSolidArrowRotateLeft,
  FaSolidChevronLeft,
  FaSolidChevronRight,
  FaSolidHandPointUp,
  FaSolidPlus,
  FaSolidRobot,
} from "solid-icons/fa";
import { VsDebugRestart } from "solid-icons/vs";
import {
  Component,
  createSignal,
  JSX,
  onMount,
  ParentComponent,
} from "solid-js";
import { Portal } from "solid-js/web";
import { useSaknotoContext } from "~/Context";
import { Game } from "~/Game";
import { useGame } from "~/GameProvider";

const BottomActions: Component = () => {
  const game = useGame();
  const context = useSaknotoContext();
  const [evl, setEvl] = createSignal(null);

  const add_engine_line = () => {
    let rep: string | null = evl();
    let f = game.chess.fen();
    if (rep !== null && rep.length > 0 && f != undefined) {
      context.repertoire.addLine(f, rep);
      setTimeout(() => {
        game?.checkIfComputerMove();
      }, 500);
    }
  };

  const add_user_line = () => {
    game?.setRepertoireMode();
  };

  onMount(() => {
    context.engine.onBoardEvaluation((ev) => {
      setEvl(ev?.lines.at(0)?.san.at(0) ?? null);
    });
  });

  const ActionButton: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
    props,
  ) => {
    return (
      <div
        class="flex items-center justify-center text-center text-lum-700 bg-lum-300 active:bg-lum-400 px-4 py-2 rounded-xl"
        {...props}
      >
        {props.children}
      </div>
    );
  };
  return (
    <Portal>
      <div class="mobile-view w-screen m-auto z-40 absolute bottom-2 flex items-center justify-center overflow-hidden rounded-xl pointer-events-none">
        <div class="bg-lum-100 p-2 flex gap-2 rounded-xl pointer-events-auto shadow-xl ">
          <ActionButton onClick={() => game.restartSlow()}>
            <FaSolidArrowRotateLeft size={24} />
          </ActionButton>
          <ActionButton onclick={() => game.undoMove()}>
            <FaSolidChevronLeft size={24} />
          </ActionButton>
          <ActionButton onclick={() => game.redoMove()}>
            <FaSolidChevronRight size={24} />
          </ActionButton>
          <ActionButton onclick={add_user_line}>
            <FaSolidPlus size={24} />
          </ActionButton>
          <ActionButton onclick={add_engine_line}>
            <FaSolidRobot size={24} />
          </ActionButton>
        </div>
      </div>
    </Portal>
  );
};

export default BottomActions;
