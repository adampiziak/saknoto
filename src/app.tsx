import "./app.scss";
import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";
import { Show, Suspense, onMount } from "solid-js";
import { SaknotoProvider, useSaknotoContext } from "./Context";
import { useMobile } from "./lib/hooks";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const RootLayout = (props: any) => {
  const ctx = useSaknotoContext();
  let rootContainer: HTMLDivElement | undefined;

  const mobile = useMobile();
  const refresh = async () => {
    if (typeof window === "undefined") {
      return;
    }
    await ctx.openingGraph.refresh();
  };

  onMount(async () => {
    ctx.openingGraph.load_wait();
    ctx.themeManager.loadSaved();
    await ctx.engine.start();
    try {
      await ctx.openingGraph.load_wait();
      await refresh();
    } catch {}
  });

  return (
    <SaknotoProvider>
      <div
        id="saknoto"
        ref={rootContainer}
        class="h-dvh w-screen relative overflow-hidden"
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
