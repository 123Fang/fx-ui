/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const args = process.argv.slice(2);


const NAME = args[0]; // 组件名
const FILE_PATH = path.join(path.resolve(__dirname), '..', 'packages');

if (!args.length) {
  console.log('请填写组件名');
  console.log('Usage: button（单个） 或 dropDown（小驼峰式）')
  process.exit(1);
}
if (/-/.test(NAME)) {
  console.log('请重新输入小驼峰式的组件名，如 dropDown')
  process.exit(1);
}

const DIRNAME = path.join(FILE_PATH, NAME); // 组件目录
// const INPUT_NAME = NAME;

// 如果存在，给出提示，然后退出
if (fs.existsSync(DIRNAME)) {
  console.log(`${NAME} 组件已经存在，请更换组件名！`);
  process.exit(1);
}

let NORMALIZED_NAME = '';
const nameTokens = NAME.split(/[_|-]([a-z])/).map((token, index) => {
  if (index === 0) {
    return token;
  }
  return token[0].toUpperCase() + token.slice(1);
});
NORMALIZED_NAME = nameTokens.join('');

fs.mkdirSync(DIRNAME, { recursive: true });


const vueComponentContent = `
<template>
  <div class="fx-${NORMALIZED_NAME}-default">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'fx-${NORMALIZED_NAME}',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.fx-${NORMALIZED_NAME}-default {}
</style>
`
fs.writeFileSync(path.join(DIRNAME, 'index.vue'), vueComponentContent);


const INDEXJSName = NORMALIZED_NAME.slice(0,1).toUpperCase() + NORMALIZED_NAME.slice(1)
const indexJsContent = `
import f${INDEXJSName} from './index.vue'

f${INDEXJSName}.install = app => {
  app.component(f${INDEXJSName}.name, f${INDEXJSName})
} 

export default f${INDEXJSName}
`
fs.writeFileSync(path.join(DIRNAME, 'index.js'), indexJsContent);



// 生成组件doc目录和其中的文件
const DIRNAM_DOC = path.join(DIRNAME, 'doc')
if (fs.existsSync(DIRNAM_DOC)) {
  console.log(`${NAME} 组件doc目录已经存在！`);
  process.exit(1);
}
fs.mkdirSync(DIRNAM_DOC, { recursive: true }); // 创建doc目录



const demoContext = `<!-- html -->
<template>
  <fx-${NORMALIZED_NAME}></fx-${NORMALIZED_NAME}>
</template>

<!-- js -->
<script setup>
import { reactive,ref } from "vue";
// init
</script>
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'demo1.vue'), demoContext);

const attrTableContext = `
<template>
  <fx-table :options="options" size="small"></fx-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "title",
        type: "String",
        red: "**",
        sel: "——",
        def: "标题",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'Attributes.vue'), attrTableContext);


const docContext = `
<script setup>
import demo1 from './demo1.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# ${NAME.slice(0,1).toUpperCase() + NAME.slice(1)} 组件

#### ${NAME}组件基本描述...

<br/>

## 基本使用

#### ${NAME} 按钮的基本使用

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="${NAME}" demoName="demo1"/>

<br/>

## Attributes 参数

<Attributes/>
<br/>
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'doc.md'), docContext);

console.log(`创建组件${NORMALIZED_NAME}成功，模版已生成`)

