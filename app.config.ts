import { defineConfig } from "@solidjs/start/config";
import { plugins } from "./postcss.config.cjs";

/** @type {import('vite').Plugin} */
const viteServerConfig = {
  name: "add headers",
  configureServer: (server: any) => {
    server.middlewares.use((req: any, res: any, next: any) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
      next();
    });
  },
};

export default defineConfig({
  vite: {
    plugins: [viteServerConfig],
  },
});
