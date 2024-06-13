import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    routeRules: {
      "/**": {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",

          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        },
      },
    },
  },
});
