import {
  FaSolidChevronLeft,
  FaSolidChevronRight,
  FaSolidPlus,
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

const BottomActions: Component<{ game: Game }> = (props) => {
  const context = useSaknotoContext();
  const [evl, setEvl] = createSignal(null);

  const add_engine_line = () => {
    let rep: string | null = evl();
    let f = props.game.state.fen();
    if (rep !== null && rep.length > 0 && f != undefined) {
      context.repertoire.addLine(f, rep);
      setTimeout(() => {
        props.game?.checkIfComputerMove();
      }, 500);
    }
  };

  onMount(() => {
    context.engine.subscribe_main((ev) => {
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
      <div class="mobile-view w-screen m-auto z-40 absolute bottom-2 flex items-center justify-center overflow-hidden rounded-xl">
        <div class="bg-lum-200 p-2 flex gap-2 rounded-xl">
          <ActionButton onClick={() => props.game.restart()}>
            <VsDebugRestart size={24} />
          </ActionButton>
          <ActionButton onclick={() => props.game.undoMove()}>
            <FaSolidChevronLeft size={24} />
          </ActionButton>
          <ActionButton onclick={() => props.game.redoMove()}>
            <FaSolidChevronRight size={24} />
          </ActionButton>
          <ActionButton onclick={add_engine_line}>
            <FaSolidPlus size={24} />
          </ActionButton>
        </div>
      </div>
    </Portal>
  );
};

export default BottomActions;
