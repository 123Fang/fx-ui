import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
// import Markdown from "vite-plugin-md";
import Markdown from "vite-plugin-vue-markdown";

import { resolve } from "path";
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
  build: {
    rollupOptions: {
      // 外部化那些库中不需要的依赖
      external: ["vue","pinia","sass","vite-plugin-vue-markdown","vue-router","@vitejs/plugin-vue","vite","highlight.js"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "fx-ui",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/style.scss" as *;',
      },
    },
  },
});
