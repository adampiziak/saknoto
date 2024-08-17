import {
  ConfigColorMode,
  MaybeConfigColorMode,
  useColorMode,
} from "@kobalte/core";
import { Select } from "@kobalte/core/select";
import { JSX, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { THEME_OPTIONS } from "~/data/ThemeManager";

export default function ThemeSelector() {
  const context = useSaknotoContext();
  const [selectedTheme, setSelectedTheme] = createSignal();

  onMount(() => {
    context.themeManager.loadSaved();
    context.themeManager.onChange((mode, color) => {
      setSelectedTheme(color);
    });
  });

  const openThemePage = () => {
    console.log("hey!");
    context.ui.sidebar.set({ active: true, view: "theme" });
  };

  const setTheme = (theme: any | null) => {
    if (theme) {
      setSelectedTheme(theme);
      context.themeManager.set(theme.value);
    }
  };
  return (
    <div class="flex items-center" onclick={() => openThemePage()}>
      <div class="hover:cursor-pointer dark:bg-accent-800 bg-accent-200 hover:bg-accent-300 dark:hover:bg-accent-700 px-4 py-1 rounded-full">
        {selectedTheme()}
      </div>
    </div>
  );
}
