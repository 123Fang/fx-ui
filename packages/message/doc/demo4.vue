<!-- html -->
<template>
  <fx-space>
    <fx-button @click="openMsg1">消息提示</fx-button>
    <fx-button @click="openMsg2">5秒后消失</fx-button>
  </fx-space>
</template>

<!-- js -->
<script setup>
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "fx-ui";引入
const openMsg1 = () => {
  Message({
    text: "自定义Icon！",
    icon: "fx-icon-collection_fill",
  });
};
const openMsg2 = () => {
  Message({
    text: "5秒后消失！",
    icon: "fx-icon-good",
    timeout: 5000,
  });
};
</script>
