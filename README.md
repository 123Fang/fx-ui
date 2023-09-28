# fx-ui

###### version:0.5.x

<img width="1421" alt="截屏2023-09-28 16 34 34" src="https://github.com/123Fang/fx-ui/assets/38906235/96441f24-29a4-4402-9012-870de3e230d1">

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
 
