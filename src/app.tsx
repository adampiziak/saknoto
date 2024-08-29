import "./app.scss";
import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createSignal, onMount } from "solid-js";
import Header from "~/components/Header";
import { SaknotoProvider, useSaknotoContext } from "./Context";
import SideBar from "./components/SideBar";
import { applyColorfulTheme, applyNeutralTheme } from "./lib/theme_utils";
import MobileNav from "./MobileNav";

const RootLayout = (props: any) => {
  const ctx = useSaknotoContext();
  const [saknotoMode, setSaknotoMode] = createSignal("light");
  const [saknotoColor, setSaknotoColor] = createSignal("hue-0");
  let rootContainer: HTMLDivElement | undefined;
  const [skv, setskn] = createSignal("");

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
        class="flex flex-col h-screen relative overflow-hidden"
      >
        <Header />
        <div class="flex grow shrink min-h-0 [&>*]:grow [&>*]:shrink">
          <Suspense>{props.children}</Suspense>
        </div>
        <SideBar />
        <MobileNav />
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
