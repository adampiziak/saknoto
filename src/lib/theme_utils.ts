import {
  converter,
  differenceEuclidean,
  toGamut as _toGamut,
  Color,
  Oklch,
  formatCss,
  formatHex,
} from "culori";

const toGamut = _toGamut as (...args: unknown[]) => (color: string) => Color;
const lightness = [
  97, //50
  91.5, //100
  85.3, //200
  80.7, //300
  73.2, //400
  64.8, //500
  54.3, //600
  44.5, //700
  38.5, //800
  30.5, //900
  20.5, //950,
];

const chroma = [
  0.0108, 0.0321, 0.0609, 0.0908, 0.1398, 0.1472, 0.1299, 0.1067, 0.0898,
  0.0726, 0.054,
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function applyColorfulTheme(hue: number, mode: "light" | "dark") {
  const oklch = converter("oklch");
  let accents = [];
  let mains = [];
  let hexstrings = [];

  for (let i = 0; i < shades.length; i++) {
    let clr = `oklch(${lightness[i]}% ${chroma[i] / 2} ${hue})`;
    let d = serializeColor(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );

    let cssshade = formatCss(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );
    let hexstring = formatHex(
      toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr),
    );
    accents.push(d);
    mains.push(cssshade);
    hexstrings.push(hexstring);
  }

  if (document?.body) {
    const el = document.body;
    for (let i = 0; i < shades.length; i++) {
      el.style.setProperty(`--accent-serial-${shades[i]}`, accents[i]);
      el.style.setProperty(`--accent-${shades[i]}`, mains[i]);
      el.style.setProperty(`--hex-accent-${shades[i]}`, hexstrings[i]);
    }
    el.style.colorScheme = mode;
  }
}

export function applyNeutralTheme(hue: number, mode: "light" | "dark") {
  const oklch = converter("oklch");
  let accents = [];
  let mains = [];
  let hexstrings = [];

  for (let i = 0; i < shades.length; i++) {
    let clr = `oklch(${lightness[i]}% ${chroma[i] * 0.1} ${hue})`;
    let d = serializeColor(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );

    let cssshade = formatCss(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );
    let hexstring = formatHex(
      toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr),
    );
    accents.push(d);
    mains.push(cssshade);
    hexstrings.push(hexstring);
  }

  if (document?.body) {
    const el = document.body;
    for (let i = 0; i < shades.length; i++) {
      el.style.setProperty(`--accent-serial-${shades[i]}`, accents[i]);
      el.style.setProperty(`--accent-${shades[i]}`, mains[i]);
      el.style.setProperty(`--hex-accent-${shades[i]}`, hexstrings[i]);
    }
    el.style.colorScheme = mode;
    el.style.colorScheme = mode;
  }
}

function serializeColor(c: Oklch) {
  return `${c.l.toFixed(3)} ${c.c.toFixed(3)} ${c.h?.toFixed(3) ?? "none"}`;
}
