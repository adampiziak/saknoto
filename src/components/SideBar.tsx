import { useKeyDownEvent } from "@solid-primitives/keyboard";
import {
  Component,
  createEffect,
  createSignal,
  Match,
  on,
  onMount,
  Show,
  Switch,
} from "solid-js";
import { useSaknotoContext } from "~/Context";
import { SideBarState } from "~/data/UIManager";
import UserView from "./UserView";
import QuickBoard from "./QuickBoardView";
import SideTheme from "./SideTheme";

const SideBar: Component<{}> = (_props) => {
  const context = useSaknotoContext();

  const [state, setState] = createSignal<SideBarState>({
    active: false,
    view: "user",
    data: undefined,
  });
  const keyevent = useKeyDownEvent();

  createEffect(
    on(keyevent, () => {
      if (keyevent()?.key === "Escape") {
        context.ui.sidebar.set({ active: false });
      }
    }),
  );

  onMount(async () => {
    context.ui.sidebar.on((state) => {
      setState(state);
    });
  });

  return (
    <div
      class={`h-screen z-50 min-w-24 w-fit absolute bg-accent-50 dark:bg-accent-900 dark:text-accent-100 text-accent-800 shadow  sidebar ${state().active ? "active" : ""}`}
    >
      <Switch>
        <Match when={state().view === "user"}>
          <UserView />
        </Match>
        <Match when={state().view === "board"}>
          <QuickBoard />
        </Match>
        <Match when={state().view === "theme"}>
          <SideTheme />
        </Match>
      </Switch>
    </div>
  );
};

export default SideBar;
