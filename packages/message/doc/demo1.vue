<!-- html -->
<template>
  <fx-space>
    <fx-button @click="openMsg">消息提示</fx-button>
    <fx-button @click="openVNodeMsg">消息提示(VNode)</fx-button>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { fMessage } from "fx-ui-vue"
import { h } from 'vue'
const openMsg = () => {
  fMessage({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
  fMessage({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>
