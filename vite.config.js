import { defineConfig } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },

  plugins: [],

  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss(resolve("./tailwind.config.js"))],
    },
  },
});
