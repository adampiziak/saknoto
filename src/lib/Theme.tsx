import {
  colorsNamed,
  converter,
  differenceCiede2000,
  differenceEuclidean,
  formatCss,
  formatHex,
  nearest,
  Oklch,
  toGamut,
} from "culori";
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

export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
  mode: ThemeMode;
  lightest: number;
  darkest: number;
  chromaFactor: number;
  hue: number;
}
const tailwindSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const steps = [
  1, // 50
  0.91, // 100
  0.84, // 200
  0.74, // 300
  0.6, // 400
  0.5, // 500
  0.4, // 600
  0.3, // 700
  0.2, // 800
  0.1, // 900
  0, // 950
];

const baseChroma = [
  0.0108, 0.0321, 0.0609, 0.0908, 0.1398, 0.1472, 0.1299, 0.1067, 0.0898,
  0.0726, 0.054,
].map((v) => v * 1.5);

export default class Theme {
  color: string;
  mode: ThemeMode;
  listeners: any[];
  systemTheme: string;
  current: ThemeConfig;
  pickerListeners: any = [];

  constructor(mode: ThemeMode = "light") {
    this.color = mode;
    this.mode = mode;
    this.listeners = [];
    this.systemTheme = "light";
    this.current = {
      mode: "light",
      lightest: 98,
      darkest: 19,
      chromaFactor: 0.1,
      hue: 252,
    };
  }

  emit() {
    let color = this.color === "system" ? this.systemTheme : this.color;
    for (const callback of this.listeners) {
      callback(this.mode, color);
    }
    this.applyTheme();
    this.pickerEmit();
  }

  onChange(callback: any) {
    this.listeners.push(callback);
    this.emit();
  }

  save() {
    window.localStorage.setItem("theme-config", JSON.stringify(this.current));
  }

  loadSaved() {
    if (window) {
      const saved = window.localStorage.getItem("theme-config");
      if (saved) {
        this.current = JSON.parse(saved);
      }
      this.emit();
    }
  }

  onPicker(callback: any) {
    this.pickerListeners.push(callback);
    this.emit();
  }

  applyTheme() {
    const oklch = converter("oklch");
    const config = this.current;

    // shades
    const shades = [];
    const lightRange = config.lightest - config.darkest;
    for (const step of steps) {
      shades.push(config.darkest + step * lightRange);
    }

    // chroma
    const chromas = [];
    for (const c of baseChroma) {
      chromas.push(c * config.chromaFactor);
    }

    // values
    const themeColors = [];
    const hexstrings = [];
    const cssColors = [];

    for (let i = 0; i < steps.length; i++) {
      let clr = `oklch(${shades[i]}% ${chromas[i]} ${config.hue})`;
      // console.log(steps[i]);
      // console.log(clr);

      let d = serializeColor(
        oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
      );
      const gamut = toGamut("p3", "oklch", differenceEuclidean("oklch"), 0);
      // console.log(gamut(clr));
      // console.log(oklch(gamut(clr)));
      // console.log(config.hue);
      // console.log(clr);
      // console.log(d);
      let hexstring = formatHex(
        toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr),
      );
      let cssshade = formatCss(
        oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
      );
      hexstrings.push(hexstring);
      themeColors.push(d);
      cssColors.push(cssshade);
    }

    if (document.body) {
      const body = document.body;
      for (let i = 0; i < steps.length; i++) {
        const step = tailwindSteps[i];
        // console.log(step);
        // console.log(themeColors[i]);
        // console.log(hexstrings[i]);
        body.style.setProperty(`--accent-serial-${step}`, themeColors[i]);
        body.style.setProperty(`--hex-accent-${step}`, hexstrings[i]);
        body.style.setProperty(`--accent-${step}`, cssColors[i]);
      }
      body.style.colorScheme = config.mode;
      body.setAttribute("saknoto_mode", config.mode);
    }
  }
  pickerEmit() {
    // console.log("picker");
    const config = this.current;

    // shades
    const modelightfactor = config.mode === "light" ? 0.8 : 0.2;
    const modelightfactortext = 1 - modelightfactor;
    const medianShade =
      config.darkest + modelightfactor * (config.lightest - config.darkest);
    const medianShadeText =
      config.darkest + modelightfactortext * (config.lightest - config.darkest);

    const medianChroma = baseChroma[3];

    const hues = [];
    const chromas = [];

    for (let s = 0; s <= 1; s += 0.05) {
      let background = `oklch(${medianShade}% ${medianChroma * s} ${config.hue})`;
      let color = `oklch(${medianShadeText}% ${medianChroma * s} ${config.hue})`;
      chromas.push({
        factor: Math.round(s * 100) / 100,
        color,
        background,
      });
    }

    const hueStep = 12;
    for (let h = 0; h < 360 - hueStep; h += hueStep) {
      let background = `oklch(${medianShade}% ${config.chromaFactor * medianChroma} ${h})`;
      let color = `oklch(${medianShadeText}% ${config.chromaFactor * medianChroma} ${h})`;

      hues.push({
        hue: h,
        color,
        background,
      });
    }
    let namedColors = Object.keys(colorsNamed);
    let nearestNamedColors = nearest(namedColors, differenceEuclidean());
    let name = nearestNamedColors(
      `oklch(${medianShade}% ${config.chromaFactor * medianChroma} ${config.hue})`,
    );

    for (const callback of this.pickerListeners) {
      callback({ config: { ...this.current }, hues, chromas, name });
    }
  }

  setChromaFactor(factor: number) {
    this.current.chromaFactor = factor;
    this.emit();
    this.save();
  }

  setHue(hue: number) {
    this.current.hue = hue;
    this.emit();
    this.save();
  }

  set_color(color: string) {
    this.color = color;
    window.localStorage.setItem("saknoto-color", this.color);
    this.emit();
  }

  setMode(mode: ThemeMode) {
    this.mode = mode;
    this.current.mode = mode;
    window.localStorage.setItem("saknoto-mode", this.mode);
    this.emit();
    this.save();
  }

  get_color() {
    return this.color;
  }
  get_mode() {
    return this.mode;
  }
}
function serializeColor(c: Oklch) {
  // console.log("hey");
  // console.log(c);
  return `${c.l.toFixed(3)} ${c.c.toFixed(3)} ${c.h?.toFixed(3) ?? "none"}`;
}
