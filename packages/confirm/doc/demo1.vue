<!-- html -->
<template>
  <fx-button @click="openConfirm">确认消息</fx-button>
</template>

<!-- js -->
<script setup>
import Confirm from "../index.js";
import Message from "../../message/index.js";
// 以上为本地示例，请使用import { Confirm, Message } from "fx-ui";引入
const openConfirm = () => {
  Confirm({
    text: "您确认要删除这条数据吗？",
  })
    .then(() => {
      Message({ text: "点击了确定" });
    })
    .catch(() => {
      Message({ text: "点击了取消" });
    });
};
</script>
