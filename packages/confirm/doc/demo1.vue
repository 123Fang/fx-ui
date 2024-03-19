<!-- html -->
<template>
  <fx-button @click="openConfirm">确认消息</fx-button>
</template>

<!-- js -->
<script setup>
import { fConfirm, fMessage } from "fx-ui-vue"

const openConfirm = () => {
  fConfirm({
    text: "您确认要删除这条数据吗？",
  })
    .then(() => {
      fMessage({ text: "点击了确定" });
    })
    .catch(() => {
      fMessage({ text: "点击了取消" });
    });
};
</script>
