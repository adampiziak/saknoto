import { JSX, onMount } from "solid-js";
import { MoonIcon, SunIcon, SystemIcon } from "~/icons";

interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: (clazz: string) => JSX.Element;
}

export const THEME_OPTIONS: ThemeOption[] = [
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

export default class ThemeManager {
  color: string;
  mode: "light" | "dark";
  listeners: any[];
  systemTheme: string;

  constructor(theme = "light") {
    this.color = theme;
    this.listeners = [];
    this.systemTheme = "light";

    onMount(() => {
      this.loadSaved();
      this.emit();
    });
  }

  emit() {
    let color = this.color === "system" ? this.systemTheme : this.color;
    for (const callback of this.listeners) {
      callback(this.mode, color);
    }
  }

  onChange(callback: any) {
    this.listeners.push(callback);
    this.emit();
  }

  loadSaved() {
    if (window) {
      const saved_color = window.localStorage.getItem("saknoto-color");
      const saved_mode = window.localStorage.getItem("saknoto-mode") as
        | "light"
        | "dark";
      if (saved_color) {
        this.color = saved_color;
      } else {
        this.set_color("neutral-266");
      }

      if (saved_mode) {
        this.mode = saved_mode;
      } else {
        this.set_mode("light");
      }
    }
  }

  set_color(color: string) {
    this.color = color;
    window.localStorage.setItem("saknoto-color", this.color);
    this.emit();
  }

  set_mode(mode: "light" | "dark") {
    this.mode = mode;
    window.localStorage.setItem("saknoto-mode", this.mode);
    this.emit();
  }

  get_color() {
    return this.color;
  }
  get_mode() {
    return this.mode;
  }
}
