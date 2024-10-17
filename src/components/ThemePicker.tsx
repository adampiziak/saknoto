import { Switch } from "@kobalte/core/switch";
import { colorsNamed, differenceCiede2000, nearest } from "culori";
import { Component, createSignal, For, onMount } from "solid-js";
import { useSaknotoContext, useTheme } from "~/Context";
import { applyTheme } from "~/lib/theme_utils";
import SaknotoSwitch from "./SaknotoSwitch";
import { neutral } from "tailwindcss/colors";
import { Button } from "@kobalte/core/button";
import { ThemeMode } from "~/lib/Theme";

const ThemePicker: Component = (props: any) => {
  const context = useSaknotoContext();
  const theme = useTheme();
  const [selected, setSelected] = createSignal(null);
  const [mode, setMode] = createSignal<"light" | "dark">("light");
  const [hues, setHues] = createSignal([]);
  const [chromas, setChromas] = createSignal([]);
  const themes = [];
  const [config, setConfig] = createSignal({});

  theme.onPicker(({ config, hues, chromas, name }: any) => {
    setHues(hues);
    setConfig(config);
    setChromas(chromas);
    setSelected(name);
  });

  let colors = Object.keys(colorsNamed);
  let nearestNamedColors = nearest(colors, differenceCiede2000());
  const settheme = (hue: number) => {
    context.themeManager.set(`hue-${hue}`);
  };
  const neutral_step = 14;
  const neutral_hues = [];
  for (let i = 0; i < 360 - 4 * neutral_step; i += neutral_step) {
    neutral_hues.push(i);
  }

  const setThemeColor = (theme: string) => {
    context.themeManager.set_color(theme);
  };

  const setThemeMode = (m: ThemeMode) => {
    setMode(m);
    context.themeManager.setMode(m);
  };

  return (
    <div class="w-full  text-lum-800 bg-lum-50 h-dvh overflow-y-auto">
      <div class="font-semibold text-accent-700 bg-accent-100 dark:bg-accent-800 dark:text-accent-200  p-2 border-b border-accent-200 dark:border-accent-700 flex justify-between items-center">
        <div>Theme: {selected()}</div>
        <Button
          class="button"
          onClick={() => context.ui.sidebar.set({ active: false })}
        >
          close
        </Button>
      </div>
      <div>{config().mode}</div>
      <div class="flex gap-2  p-2">
        <div
          onclick={() => setThemeMode("light")}
          class={`${config().mode === "light" ? "border-2 border-lum-500" : "border-2 border-transparent"} bg-accent-100 grow text-center text-accent-700 px-3 py-2 rounded font-medium`}
        >
          Light
        </div>
        <div
          onclick={() => setThemeMode("dark")}
          class={`${config().mode === "dark" ? "border-2 border-lum-500" : "border-2 border-transparent"} bg-accent-800 grow text-center text-accent-200 px-3 py-2 rounded font-medium`}
        >
          Dark
        </div>
      </div>
      <div class="p-2">
        <div>hue</div>
        <div class="flex flex-wrap gap-x-3 gap-y-2">
          <For each={hues()}>
            {(it, _) => (
              <div
                class={`px-3 py-1 rounded border-2 ${config().hue === it.hue ? "border-lum-500" : "border-transparent"}`}
                style={{ background: it.background, color: it.color }}
                onclick={() => theme.setHue(it.hue)}
              >
                {it.hue}
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="p-2">
        <div>saturation</div>
        <div class="flex flex-wrap gap-x-3 gap-y-2">
          <For each={chromas()}>
            {(it, _) => (
              <div
                class={`px-3 py-1 rounded border-2 ${it.factor === config().chromaFactor ? "border-lum-500" : "border-transparent"}`}
                style={{ background: it.background, color: it.color }}
                onclick={() => theme.setChromaFactor(it.factor)}
              >
                {it.factor}
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default ThemePicker;
