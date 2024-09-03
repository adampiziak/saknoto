import { Accessor, createSignal, onMount } from "solid-js";

export const useDeviceWidth = (): Accessor<number> => {
  const [width, setWidth] = createSignal(1200);

  onMount(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return width;
};

export const useDeviceHeight = (): Accessor<number> => {
  const [height, setHeight] = createSignal(1200);

  onMount(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  });

  return height;
};

export const useMobile = (): Accessor<boolean> => {
  const [mode, setMode] = createSignal(true);

  onMount(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width < 1000) {
        setMode(true);
      } else {
        setMode(false);
      }
    });
  });

  return mode;
};
