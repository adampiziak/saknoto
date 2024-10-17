import { useNavigate } from "@solidjs/router";
import {
  Component,
  createSignal,
  JSX,
  Match,
  ParentComponent,
  Show,
  Switch,
} from "solid-js";
import { useUserInterface } from "~/Context";
import BottomBarContent from "./BottomBarContent";
import { FaSolidArrowLeft } from "solid-icons/fa";
import UserView from "./UserView";
import ThemeSelector from "./ThemeSelector";
import ThemePicker from "./ThemePicker";

const MobileSideView: Component = () => {
  const ui = useUserInterface();
  const nav = useNavigate();

  const [activeView, setActiveView] = createSignal("nav");

  const goto = (dest: string) => {
    nav(dest);
    ui.mobilenav.deactivate();
  };

  const NavAction: ParentComponent<{ dest?: string }> = (props) => {
    return (
      <div
        class="bg-lum-200 text-lum-700 font-medium grow text-center active:bg-lum-300 p-2 rounded-lg"
        onclick={() => (props.dest ? goto(props.dest) : "")}
      >
        {props.children}
      </div>
    );
  };

  const NavButton: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
    props,
  ) => {
    return (
      <div
        {...props}
        class="bg-lum-200 text-lum-700 font-medium grow text-center active:bg-lum-300 p-2 rounded-lg"
      >
        {props.children}
      </div>
    );
  };

  return (
    <div class="bg-lum-50 h-full w-screen p-8 flex flex-col justify-start ">
      <Switch>
        <Match when={activeView() === "nav"}>
          <div class="flex gap-4 items-center text-lum-700">
            <NavButton onclick={() => setActiveView("username")}>
              username
            </NavButton>
            <NavButton onclick={() => setActiveView("theme")}>
              theme: hue-256
            </NavButton>
          </div>
          <div class="flex flex-col mt-8 gap-3">
            <NavAction dest="/">Home</NavAction>
            <NavAction dest="/study/flashcards">Study</NavAction>
            <NavAction dest="/repertoire">repertoire</NavAction>
          </div>
        </Match>
        <Match when={activeView() === "theme"}>
          <ThemePicker />
        </Match>
        <Match when={activeView() === "username"}>
          <UserView />
        </Match>
      </Switch>
      <BottomBarContent mode="nav">
        <div class="items-center flex justify-end w-full">
          <Show when={activeView() === "nav"}>
            <div
              class="px-4 py-2 rounded-xl flex  w-full mx-4  justify-center gap-4 items-center bg-lum-100"
              onclick={() => ui.mobilenav.deactivate()}
            >
              <FaSolidArrowLeft />
              <div>back</div>
            </div>
          </Show>
          <Show when={activeView() === "theme"}>
            <div
              class="px-4 py-2 rounded-xl flex  w-full mx-4  justify-center gap-4 items-center bg-lum-100"
              onclick={() => setActiveView("nav")}
            >
              <FaSolidArrowLeft />
              <div>back</div>
            </div>
          </Show>
          <Show when={activeView() === "username"}>
            <div
              class="px-4 py-2 rounded-xl flex  w-full mx-4  justify-center gap-4 items-center bg-lum-100"
              onclick={() => setActiveView("nav")}
            >
              <FaSolidArrowLeft />
              <div>back</div>
            </div>
          </Show>
        </div>
      </BottomBarContent>
    </div>
  );
};

export default MobileSideView;
