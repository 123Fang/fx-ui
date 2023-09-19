<!-- html -->
<template>
  <fx-space>
    <fx-button @click="openInfo">文本状态</fx-button>
    <fx-button @click="openSuccess">成功状态</fx-button>
    <fx-button @click="openWarn">警告状态</fx-button>
    <fx-button @click="openError">错误状态</fx-button>
    <fx-button @click="openCustom">自定义</fx-button>
  </fx-space>
</template>

<!-- js -->
<script setup>
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "fx-ui";引入
const openInfo = () => {
  Message({
    type: "info",
    text: "文本消息提示!",
  });
};
const openSuccess = () => {
  Message({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  Message({
    type: "warn",
    text: "警告状态消息提示!",
  });
};
const openError = () => {
  Message({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  Message({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "fx-icon-file-common",
    textColor: "#000",
    bgColor: "#e19af3",
  });
};
</script>
