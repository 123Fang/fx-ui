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
  <div class='fx-${NORMALIZED_NAME}-default'>
    <slot />
  </div>
</template>

<script setup>
import { defineOptions, ref } from 'vue'

defineOptions({
  name: 'fx-${NORMALIZED_NAME}',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style scoped lang='scss'>
.fx-${NORMALIZED_NAME}-default {}
</style>
`
fs.writeFileSync(path.join(DIRNAME, 'index.vue'), vueComponentContent);


const INDEXJSName = NORMALIZED_NAME.slice(0,1).toUpperCase() + NORMALIZED_NAME.slice(1)
const indexJsContent = `
import f${INDEXJSName} from './index.vue'
f${INDEXJSName}.install = function (Vue) {
  Vue.component(f${INDEXJSName}.name, ${INDEXJSName})
}
export default f${INDEXJSName}
`
fs.writeFileSync(path.join(DIRNAME, 'index.js'), indexJsContent);

console.log(`创建组件${NORMALIZED_NAME}成功`)



