import {
  ConfigColorMode,
  MaybeConfigColorMode,
  useColorMode,
} from "@kobalte/core";
import { Select } from "@kobalte/core/select";
import { JSX, createSignal, onMount } from "solid-js";
import { ColorPicker, MoonIcon, SunIcon, SystemIcon } from "~/icons";
import Sf16170Web from "../../public/sf161-70";

interface ThemeOption {
  value: ConfigColorMode;
  label: string;
  icon: (clazz: string) => JSX.Element;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: (clazz: string) => <SunIcon class={clazz} />,
  },
  {
    value: "dark",
    label: "Dark",

    icon: (clazz: string) => <MoonIcon class={clazz} />,
  },
  {
    value: "system",
    label: "System",
    icon: (clazz: string) => <SystemIcon class={clazz} />,
  },
];

function parseCookie(): MaybeConfigColorMode {
  const match = document.cookie.match(/(^| )kb-color-mode=([^;]+)/);
  return match?.[2] as MaybeConfigColorMode;
}

export default function ThemeSelector() {
  const { setColorMode } = useColorMode();

  const [selectedTheme, setSelectedTheme] = createSignal();
  onMount(() => {
    setSelectedTheme(
      THEME_OPTIONS.find((option) => option.value === parseCookie()),
    );
  });
  const setTheme = (theme: ThemeOption | null) => {
    if (theme) {
      setSelectedTheme(theme);
      setColorMode(theme.value);
    }
  };
  return (
    <div class="flex items-center">
      <Select
        options={THEME_OPTIONS}
        optionValue="value"
        optionTextValue="label"
        value={selectedTheme() ?? THEME_OPTIONS[0]}
        onChange={(opt) => setTheme(opt)}
        itemComponent={(props) => (
          <Select.Item
            item={props.item}
            class="flex items-center gap-3 outline-none ui-selected:text-blue-700 dark:ui-selected:text-blue-300 ui-highlighted:bg-main-hover ui-highlighted:cursor-pointer px-2 py-2"
          >
            {props.item.rawValue.icon("w-4 h-4")}
            <Select.ItemLabel class="text-current">
              {props.item.rawValue.label}
            </Select.ItemLabel>
          </Select.Item>
        )}
      >
        <Select.Trigger class="outline-none flex items-center hover:bg-main-hover p-2 rounded">
          <Select.Value<ThemeOption>>
            {(state) => state.selectedOption().icon("h-5 w-5")}
          </Select.Value>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content class="bg-main shadow-md rounded border border dark:border-zinc-800 border-zinc-200">
            <Select.Listbox class="" />
          </Select.Content>
        </Select.Portal>
      </Select>
    </div>
  );
}
