# fx-ui

###### version:0.5.x

description: 从零开始commit。目标是一步一步做一个完整,稳定，生产可用的UI组件库。持续开发中...！PS:在组件库开发过程中可以了解底层组件的设计与编写之外，还会与前端工程化，CICD（后续集成），TS类型体操（后续会支持ts），组件库对样式的设计和打包（后续集成），单元测试，Lint工具，重构等等都有涉及。有兴趣的同学欢迎加入，一起学习！
  - "vite"
  - "vue3"
  - "ui"
***

### 开发FX-UI组件
##### 使用如下命令，根据命令行提示选择：

```
pnpm new
```
pnpm new 命令有三项选择: 
- 1 自动生成组件模版文件
- 2 自动生成组件库打包入口文件
- 3 自动生成组件库对应的路由页面



### 快速使用
```
npm install  fx-ui --save
cnpm install  fx-ui --save
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'
const app = createApp(App)
app.use(mzlUi)
app.mount('#app')
```
### 愉快开始
```
<fx-button>默认按钮</fx-buttonn> 
<fx-button type="primary">主要按钮</fx-button>
```

#### 等待完善部分
- 添加测试用例
- 组件样式抽离成一个包，支持css变量可配置样式
- ts支持
 