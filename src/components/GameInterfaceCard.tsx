import { Button } from "@kobalte/core/button";
import { Select } from "@kobalte/core/select";
import { ToggleButton } from "@kobalte/core/toggle-button";
import { Accessor, Component, For, Show, createSignal } from "solid-js";
import { ComputerIcon, DraggableIcon } from "~/icons";

const GameInterfaceCard: Component<{
  history: Accessor<string[]>;
  restart: undefined | (() => any);
  setOrientation: undefined | (() => any);
}> = (props) => {
  const [color, setColor] = createSignal<"white" | "black">("white");

  const update_color = (c) => {
    if (!c) {
      return;
    }
    setColor(c);
    if (props.setOrientation) {
      props.setOrientation(c);
    }
  };

  const setLastColor = () => {
    const lastgame = JSON.parse(localStorage.getItem("lastgame"));
    const username = localStorage.getItem("username");
    console.log(lastgame);
    if (lastgame?.tags.White === username) {
      update_color("white");
    } else {
      update_color("black");
    }
  };

  return (
    <div class="card lvl-1">
      <div class="card-header flex items-center">
        <DraggableIcon class="text-zinc-300/50 mr-1" />
        <div class="">Settings</div>
      </div>
      <Button
        class="py-2 px-3 rounded hoverable lvl-2 m-2"
        onClick={() => props.restart()}
      >
        restart
      </Button>
      <Button
        class="py-2 px-3 rounded hoverable lvl-2 m-2"
        onClick={setLastColor}
      >
        Load last game color
      </Button>
      <ToggleButton
        class="p-2 lvl-2 rounded border font-medium"
        onChange={() => update_color(color() === "white" ? "black" : "white")}
      >
        {(state) => color()}
      </ToggleButton>

      <div class="flex gap-2 m-4">
        <For each={props.history()}>
          {(item, index) => (
            <div>
              {index() % 2 == 0 ? `${index() / 2 + 1}.` : ""}
              {item}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default GameInterfaceCard;
