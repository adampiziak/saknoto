import {
  ConfigColorMode,
  MaybeConfigColorMode,
  useColorMode,
} from "@kobalte/core";
import { Select } from "@kobalte/core/select";
import { JSX, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { THEME_OPTIONS } from "~/lib/Theme";

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
      <div class="hover:cursor-pointer bg-lum-100 px-3 py-1 rounded-full">
        {selectedTheme()}
      </div>
    </div>
  );
}
