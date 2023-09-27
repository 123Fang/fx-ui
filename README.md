# fx-ui

###### version:0.5.x

description: 从零开始commit。目标是一步一步做一个完整,稳定，生产可用的UI组件库。持续开发中...！PS:在组件库开发过程中可以了解底层组件的设计与编写之外，还会与前端工程化，CICD（后续集成），TS类型体操（后续会支持ts），组件库对样式的设计和打包（后续集成），单元测试，Lint工具，重构等等都有涉及。有兴趣的同学欢迎加入，一起学习！
  - "vite"
  - "vue3"
  - "ui"
***
<br>

### 开发一个组件
#### 使用如下命令创建组件模版：

```shell
pnpm new
```
<br>

#### 根据提示选择，输入组件名，即可生成模版： 
- 1 是否生成组件模版文件 ？
    1-1 是否生成此组件对应的路由页面 ？
- 2 是否生成组件库打包入口文件 ？
- 3 自动生成组件库对应的路由页面 ？

<br>


### 使用
```shell
npm install  fx-ui-vue --save
cnpm install  fx-ui-vue --save
```
<br>

### 引入
```Js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import FXUI from 'fx-ui-vue'
import 'fx-ui-vue/style.css' // 引入样式

createApp(App).use(FXUI).mount('#app')

```

<br>

### 愉快开始
```html
<fx-button>默认按钮</fx-buttonn> 
<fx-button type="primary">主要按钮</fx-button>
```
<br>


#### 等待完善部分
- 添加测试用例
- 组件样式抽离成一个包，支持css变量可配置样式
- ts支持
 