import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
// import Markdown from "vite-plugin-md";
import Markdown from "vite-plugin-vue-markdown";

import { resolve } from "path";
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "../src/styles/style.scss" as *;',
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['fx-ui-vue']
    }
  }
});
