import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import "./app.css";
import { ColorModeProvider, cookieStorageManagerSSR } from "@kobalte/core";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/server";
function getServerCookies() {
  "use server";

  const colorMode = getCookie("kb-color-mode");

  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

const RootLayout = (props) => {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie,
  );

  return (
    <ColorModeProvider storageManager={storageManager}>
      <Header />
      <Suspense>{props.children}</Suspense>
    </ColorModeProvider>
  );
};

export default function App() {
  return (
    <Router root={RootLayout}>
      <FileRoutes />
    </Router>
  );
}
