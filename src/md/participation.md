---
version: 0.4.x
title: radio
---

# FX-UI-VUE 贡献指南

### 首先非常感谢您能选择使用 fx-ui-vue。fx-ui-vue 是基于 vue3 开发， 旨在秉承数据驱动视图，力求更小的体积、更快的相应、更强的拓展性、更完美的支持、更友好的渲染。任何一个开源库都离不开大家的共同贡献和维护，如果您愿意参与贡献，请阅读以下内容。

## 问题反馈

- ### 如果您在使用中存在 _bug_ 或者有更超前的思想及解决方案，不限于新的组件、新的模式，您可以在 _Issue_ 提交问题，我们会定时进行维护并回复。

## 分支规范

- ### 贡献代码请保持在 _dev_ 分支，禁止操作 _main_ 分支。
- ### 提交代码前请先 _rebase_。
- ### 组件文档暂时需要提供 _md_ 文件，包括（使用方式、演示、配置项、事件 API、插槽说明...）。
- ### PR 提交流程示例：

  ```javascript
  git add .
  git commit -m"add component:button"   //示例
  git pull --rebase origin dev
  git push origin dev
  ```

## 文档集成规范

```
 使用 npm run gc xxx 创建新组件后，组件目录下会自动生成 doc 目录和初始化模版文件， 这部分用于文档。
```

- ### 组件目录下 _doc_ 文件夹用于文档编写。
- ### _doc_ 文件夹下提供 _doc.md_，一个组件最多只允许一个 _.md_ 文件。
- ### doc 文件同级存放 _demo.vue_ 文件，_demo_ 不限个数。
- ### _doc.md_ 文件顶部使用 _setup_ 语法糖的方式引入 _demo_ 文件，使用组件的形式展示。
- ### _src/router/routerPage/page.js_ 引入 md 文件作为路由使用即可。
- ### 菜单管理文件在 _/src/const/menuList.js_, *path*路劲二级路由名保持跟组件文件夹名及路由 path 配置一致。
- ### _Attributes.vue_ 作为参数组件，具体使用示例请参考 _buttom/doc/Attributes.vue_。
- ### _Events.vue_ 作为事件 API 组件，具体使用示例请参考 _input/doc/Events.vue_
- ### 如果有其他的 api 需要展示，新增相关组件文件并引入，例如：_options.vue_，具体使用示例请参考 _tree/doc/options.vue_
- ### 代码预览文件为 src/components/Preview.vue，同时在 _doc.md_ 文件以组件的形式引入 _Preview.vue_ ，接收两个*props*，_compName_ 为组件目录名（建议与路由名保持一致），_demoName_ 为要展示的 _demo_ 文件名，例如：
  ```javascript
  //doc.md
  <script setup>
    import demo1 from './demo1.vue';
    import demo2 from './demo2.vue';
    import preview from '@/components/preview.vue'
    <div class="componetnsBox">
      <demo1/>
    </div>
    <preview compName="button" demoName="demo1"/>
    <div class="componetnsBox">
      <demo2/>
    </div>
    <preview compName="button" demoName="demo2"/>
  </script>
  ```

## 组件测试规范

- ### 测试规范后续集成

## Issue 规范

- ### 在提交 _issue_ 之前，请搜索相关内容是否已被提出。
- ### 请说明 _fx-ui_ 和 _Vue_ 的版本号，并提供操作系统和浏览器信息。推荐使用 _JSFiddle_ 生成在线 _demo_，这能够更直观地重现问题。

## Pull Request 规范

- ### 请先 _fork_ 一份到自己的项目下，不要直接在仓库下建分支。
- ### _commit_ 信息要以[组件名]: 描述信息 的形式填写，例如 Button: fix xxx bug。
- ### 执行 _build_ 后可以正确打包文件。
- ### 提交 _PR_ 前请 _rebase_，确保 _commit_ 记录的整洁。
- ### 确保 _PR_ 是提交到 dev 分支，而不是 main 分支。
- ### 如果是修复 _bug_，请在 _PR_ 中给出描述信息。
- ### 合并代码会有专人审核，避免滥用植入等，审核通过后即可合并。
- ### 打包测试组件命令为 _yarn build_ 或 _npm run build_
- ### 打包网页文件包命令为 _yarn build:html_ 或 _npm run build:html_

## 开发环境

- ### 你需要 Node.js 14+，yarn 1.1+ 和 npm 6+及 vite 2+

  ### 项目启动

  ```javascript
  npm run dev
  ```

  <br/>

  ### 项目打包

  ```javascript
  npm run build
  ```

  <br/>

## 组件开发规范

- ### 在根目录下使用 _npm run gc compName_ ,自动在 packages 目录下生成组件模版文件。

```javascript
npm run gc button
```

- ### 在根目录下使用 _npm run ge_ ,自动在生成组件库打包入口文件。

```javascript
npm run ge
```

- ### 组件入口文件以 _index.js_ 命名，并包含 _install_ 方法,参考代码：
  ```javascript
  import fButton from "./index.vue";
  fButton.install = (app) => {
    app.component(fButton.name, fButton);
  };
  export default fButton;
  ```
  <br/>
- ### _packages_ 文件夹下 _index.js_ 作为整体入口文件，须包含所有组件，若需要绑定全局变量或提供组件实例调用，参考代码：
  ```
  app.config.globalProperties.$message = Message;
  ```
  <br/>
- ### 任何组件禁止使用三方依赖库。
- ### 组件内如果依赖了其他组件，需要在当前组件内引入，参考 _select_。

## 代码规范

- ### 代码规范目前后续添加
- ### 避免过多的 html 代码累赘，秉承数据驱动视图思想，简化使用繁琐度，提供更强的拓展性。
- ### 其他请参考 eslint [standard](https://github.com/standard/standard/blob/master/RULES.md#javascript-standard-style)
<br/>
<br/>
<br/>
