![Image text](https://github.com/123Fang/fx-ui/src/assets/logo.jpeg)


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
