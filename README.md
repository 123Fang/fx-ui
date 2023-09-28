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

<img width="685" alt="截屏2023-09-20 15 52 45" src="https://github.com/123Fang/fx-ui/assets/38906235/c657612b-18ba-4416-88a9-a71c8eb6f56e">

<img width="782" alt="截屏2023-09-20 15 53 05" src="https://github.com/123Fang/fx-ui/assets/38906235/0cbf7f93-6dc5-473a-a66f-5d74ebd0a5d9">

<img width="794" alt="截屏2023-09-20 15 54 03" src="https://github.com/123Fang/fx-ui/assets/38906235/26ccb0b1-38b3-460b-a245-aa2e5a686579">

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
 
