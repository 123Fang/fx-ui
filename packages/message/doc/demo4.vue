<!-- html -->
<template>
  <fx-space>
    <fx-button @click="openMsg1">消息提示</fx-button>
    <fx-button @click="openMsg2">5秒后消失</fx-button>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { fMessage } from "fx-ui-vue"

const openMsg1 = () => {
  fMessage({
    text: "自定义Icon！",
    icon: "fx-icon-collection_fill",
  });
};
const openMsg2 = () => {
  fMessage({
    text: "5秒后消失！",
    icon: "fx-icon-good",
    timeout: 5000,
  });
};
</script>
