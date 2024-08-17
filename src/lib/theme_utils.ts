import {
  converter,
  differenceEuclidean,
  toGamut as _toGamut,
  Color,
  Oklch,
  formatCss,
} from "culori";

const toGamut = _toGamut as (...args: unknown[]) => (color: string) => Color;

const lightness = [
  97.8, //50
  96.6, //100
  90.3, //200
  82.7, //300
  74.2, //400
  64.8, //500
  54.3, //600
  41.5, //700
  37.5, //800
  30.5, //900
  23.5, //950,
];

const chroma = [
  0.0108, 0.0321, 0.0609, 0.0908, 0.1398, 0.1472, 0.1299, 0.1067, 0.0898,
  0.0726, 0.054,
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function applyColorfulTheme(
  el: HTMLDivElement,
  hue: number,
  mode: "light" | "dark",
) {
  const oklch = converter("oklch");
  let accents = [];
  let mains = [];
  console.log(hue);

  for (let i = 0; i < shades.length; i++) {
    let clr = `oklch(${lightness[i]}% ${chroma[i] / 2} ${hue})`;
    let d = serializeColor(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );

    let cssshade = formatCss(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );
    accents.push(d);
    mains.push(cssshade);
  }

  for (let i = 0; i < shades.length; i++) {
    console.log(accents[i]);
    el.style.setProperty(`--accent-serial-${shades[i]}`, accents[i]);
    el.style.setProperty(`--accent-${shades[i]}`, mains[i]);
  }
  el.style.colorScheme = mode;
}

export function applyNeutralTheme(
  el: HTMLDivElement,
  hue: number,
  mode: "light" | "dark",
) {
  const oklch = converter("oklch");
  let accents = [];
  let mains = [];
  console.log(hue);

  for (let i = 0; i < shades.length; i++) {
    let clr = `oklch(${lightness[i]}% ${chroma[i] * 0.2} ${hue})`;
    let d = serializeColor(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );

    let cssshade = formatCss(
      oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(clr)),
    );
    accents.push(d);
    mains.push(cssshade);
  }

  for (let i = 0; i < shades.length; i++) {
    console.log(accents[i]);
    el.style.setProperty(`--accent-serial-${shades[i]}`, accents[i]);
    el.style.setProperty(`--accent-${shades[i]}`, mains[i]);
  }
  el.style.colorScheme = mode;
  el.style.colorScheme = mode;
}

function serializeColor(c: Oklch) {
  return `${c.l.toFixed(3)} ${c.c.toFixed(3)} ${c.h?.toFixed(3)}`;
}
