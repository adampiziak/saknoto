import { useColorMode } from "@kobalte/core";
import { Select } from "@kobalte/core/select";
import { createSignal } from "solid-js";

export default function ThemeSelector() {
  const { colorMode, setColorMode } = useColorMode();
  const modes = ["light", "dark", "system"];
  const [selectedTheme, setSelectedTheme] = createSignal(colorMode());
  const setTheme = (theme: string | null) => {
    if (theme) {
      setSelectedTheme(theme);
      setColorMode(theme);
    }
  };
  return (
    <div>
      <Select
        options={modes}
        value={selectedTheme()}
        onChange={setTheme}
        itemComponent={(props) => (
          <Select.Item
            item={props.item}
            class="ui-selected:text-blue-500 ui-highlighted:bg-gray-900 ui-highlighted:cursor-default p-2"
          >
            <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          </Select.Item>
        )}
      >
        <Select.Trigger class="hover:bg-gray-800">
          <Select.Value<string>>
            {(state) => state.selectedOption()}
          </Select.Value>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content class="">
            <Select.Listbox class="" />
          </Select.Content>
        </Select.Portal>
      </Select>
    </div>
  );
}
