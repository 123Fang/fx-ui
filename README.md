# fx-ui

###### version:0.2.2

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

#### 更小的体积 
#### 更快的响应
#### 更强的拓展性
#### 更完美的支持
#### 更友好的渲染
