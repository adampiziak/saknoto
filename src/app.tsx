import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import {
  Context,
  Suspense,
  createContext,
  onMount,
  useContext,
} from "solid-js";
import Header from "~/components/Header";
import "./app.scss";
import {
  ColorModeProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@kobalte/core";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/server";
import OpeningGraph from "./OpeningGraph";
import { Repertoire } from "./Repertoire";
import UserManager from "./UserMananger";

function getServerCookies() {
  "use server";

  const colorMode = getCookie("kb-color-mode");

  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export interface Sakarbo {
  userManager: UserManager;
  openingGraph: OpeningGraph;
  repertoire: Repertoire;
}

const context = {
  userManager: new UserManager(),
  openingGraph: new OpeningGraph(),
  repertoire: new Repertoire(),
};

const SakarboContext = createContext(context);
export function useSakarboContext(): Sakarbo {
  return useContext(SakarboContext);
}

const RootLayout = (props: any) => {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie,
  );

  // const storageManager = localStorageManager("kb-color-mode");

  onMount(() => {
    context.userManager.load();
    const username = context.userManager.get();
    if (username) {
      context.openingGraph.load(username);
    }
    context.repertoire.load();
  });

  return (
    <SakarboContext.Provider>
      <ColorModeProvider storageManager={storageManager}>
        <div class="flex flex-col h-screen">
          <Header />
          <Suspense>{props.children}</Suspense>
        </div>
      </ColorModeProvider>
    </SakarboContext.Provider>
  );
};

export default function App() {
  return (
    <Router root={RootLayout}>
      <FileRoutes />
    </Router>
  );
}
