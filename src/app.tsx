import "./app.scss";
import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";
import { Show, Suspense, createSignal, onMount } from "solid-js";
import Header from "~/components/Header";
import { SaknotoProvider, useSaknotoContext } from "./Context";
import SideBar from "./components/SideBar";
import { applyColorfulTheme, applyNeutralTheme } from "./lib/theme_utils";
import MobileNav from "./MobileNav";
import { useDeviceWidth, useMobile, useResponsive } from "./lib/hooks";
import BottomBar from "./components/BottomBar";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const RootLayout = (props: any) => {
  const ctx = useSaknotoContext();
  const [saknotoMode, setSaknotoMode] = createSignal("light");
  const [saknotoColor, setSaknotoColor] = createSignal("hue-0");
  let rootContainer: HTMLDivElement | undefined;
  const [skv, setskn] = createSignal("");

  const mobile = useMobile();
  onMount(async () => {
    ctx.openingGraph.load_wait();
    ctx.themeManager.loadSaved();
    if (rootContainer) {
      // let hue = Math.floor(Math.random() * 360);
      // applyTheme(rootContainer, hue, false);
      let v = rootContainer.style.getPropertyValue("--saknoto-accent-500");
      setskn(v);
    }
    ctx.themeManager.onChange((mode: "light" | "dark", color: string) => {
      setSaknotoColor(color);
      setSaknotoMode(mode);

      let [color_type, value] = color.split("-");

      if (color_type === "hue") {
        const number = parseInt(value.match(/\d+/)[0], 10);
        applyColorfulTheme(number, mode);
      }
      if (color_type === "neutral") {
        const number = parseInt(value.match(/\d+/)[0], 10);
        applyNeutralTheme(number, mode);
      }
    });
    await ctx.engine.start();
  });

  return (
    <SaknotoProvider>
      <div
        id="saknoto"
        ref={rootContainer}
        saknoto_color={saknotoColor()}
        saknoto_mode={saknotoMode()}
        class="h-screen w-screen relative overflow-hidden"
      >
        <Show
          when={mobile()}
          fallback={
            <DesktopLayout>
              <Suspense>{props.children}</Suspense>
            </DesktopLayout>
          }
        >
          <MobileLayout>
            <Suspense>{props.children}</Suspense>
          </MobileLayout>
        </Show>
      </div>
    </SaknotoProvider>
  );
};

export default function App() {
  return (
    <>
      <Router root={RootLayout}>
        <FileRoutes />
      </Router>
    </>
  );
}
