import "./app.scss";
import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import Header from "~/components/Header";
import { ColorModeProvider, cookieStorageManagerSSR } from "@kobalte/core";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/server";
import { SakarboProvider, useSakarboContext } from "./Context";

function getServerCookies() {
  "use server";

  const colorMode = getCookie("kb-color-mode");

  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

const RootLayout = (props: any) => {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie,
  );

  onMount(async () => {
    const ctx = useSakarboContext();
    await ctx.openingGraph.load_wait();
    ctx.engine.start();
  });

  return (
    <SakarboProvider>
      <ColorModeProvider storageManager={storageManager}>
        <div class="flex flex-col h-screen">
          <Header />
          <Suspense>{props.children}</Suspense>
        </div>
      </ColorModeProvider>
    </SakarboProvider>
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
