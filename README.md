<p align="center">
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src="./src/assets/logo.jpeg" alt="Fx UI" width="180" style="width: 180px;" />
  </a>
</p>
<h1 align="center">Fx UI</h1>
<p align="center">
  Highly customizability, performance pretty good
</p>
<p align="center">
  <a href="" target="_blank">
    <img src="https://img.shields.io/github/package-json/v/vexip-ui/vexip-ui" alt="NPM version"/>
  </a>
</p>

<p align="center">
  If you have created any awesome thing with Vexip UI and would like to showcase it on the official website, you can contact me. If you would like to contribute code, you are very welcome!
</p>


###### version:0.5.x

description: 一套适合开发者使用的轻量级UI组件库，完美支持vite+vue3

  - "vite"
  - "vue3"
  - "ui"
***
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
- 版本号提交前自动更新
- 添加测试用例
- 组件库文档搭建
- 组件样式抽离成一个包，支持css变量，可配置样式
