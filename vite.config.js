import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
// import Markdown from "vite-plugin-md";
import Markdown from "vite-plugin-vue-markdown";
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    vueJsx() // 针对测试用例中jsx的编译
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
      name: "fx-ui-vue",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/style.scss" as *;',
      },
    },
  },
  // vitest
  test: {
    clearMocks: true,
    include: ['./packages/**/__test__/*.jsx'],
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  }
});
