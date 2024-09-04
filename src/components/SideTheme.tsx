import { Switch } from "@kobalte/core/switch";
import { colorsNamed, differenceCiede2000, nearest } from "culori";
import { Component, createSignal, For, onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { applyTheme } from "~/lib/theme_utils";
import SaknotoSwitch from "./SaknotoSwitch";
import { neutral } from "tailwindcss/colors";
import { Button } from "@kobalte/core/button";

const SideTheme: Component = (props: any) => {
  const context = useSaknotoContext();
  const [selected, setSelected] = createSignal(null);
  const [mode, setMode] = createSignal<"light" | "dark">("light");
  const hues = [];
  const themes = [];
  const step = 12;
  for (let i = 0; i < 360 - 4 * step; i += step) {
    hues.push(i);
  }
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

  const setThemeMode = (dark: boolean) => {
    const mode = dark ? "dark" : "light";
    context.themeManager.set_mode(mode);
  };

  onMount(() => {
    context.themeManager.onChange((mode: "light" | "dark", color: string) => {
      setMode(mode);
      setSelected(color);
    });
  });

  return (
    <div class="w-full max-w-96 text-lum-800 bg-lum-50 h-dvh overflow-y-auto self-center">
      <div class="font-semibold text-accent-700 bg-accent-100 dark:bg-accent-800 dark:text-accent-200  p-2 border-b border-accent-200 dark:border-accent-700 flex justify-between items-center">
        <div>Theme: {selected()}</div>
        <Button
          class="button"
          onClick={() => context.ui.sidebar.set({ active: false })}
        >
          close
        </Button>
      </div>
      <div class="p-2 flex flex-col gap-2">
        <SaknotoSwitch
          checked={mode() === "dark"}
          onChange={(v) => setThemeMode(v)}
        >
          Dark mode
        </SaknotoSwitch>
      </div>
      <div class="p-4">
        <div class="mb-2">Neutral</div>
        <div class="flex flex-wrap gap-x-4 gap-y-2 justify-start">
          <For each={neutral_hues}>
            {(h, _) => {
              let darkcolor = `oklch(20% 0.03 ${h})`;
              let lightcolor = `oklch(90% 0.03 ${h})`;
              let lighttextcolor = `oklch(12% 0.03 ${h})`;
              let darktextcolor = `oklch(72% 0.03 ${h})`;
              return (
                <div
                  onClick={() => setThemeColor(`neutral-${h}`)}
                  class={
                    "rounded px-3 py-2 opacity-90 hover:opacity-100 hover:cursor-pointer"
                  }
                  style={{
                    background: mode() === "light" ? lightcolor : darkcolor,
                    color: mode() === "light" ? lighttextcolor : darktextcolor,
                  }}
                >
                  {nearestNamedColors(lightcolor, 1)}
                </div>
              );
            }}
          </For>
        </div>
      </div>
      <div class="p-4">
        <div class="mb-2">Colorful</div>
        <div class="flex flex-wrap gap-x-5 gap-y-2 justify-start">
          <For each={hues}>
            {(h, _) => {
              let color = `oklch(82% 0.09 ${h})`;
              let textcolor = `oklch(12% 0.09 ${h})`;
              return (
                <div
                  onClick={() => setThemeColor(`hue-${h}`)}
                  class={
                    "rounded px-3 py-2 opacity-80 hover:opacity-100 hover:cursor-pointer "
                  }
                  style={{ background: color, color: textcolor }}
                >
                  {nearestNamedColors(color, 1)}
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
};

export default SideTheme;
