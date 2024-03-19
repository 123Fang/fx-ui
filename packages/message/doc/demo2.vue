<!-- html -->
<template>
  <fx-button @click="openMsg">消息提示</fx-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const openMsg = () => {
  instance.proxy.$Message({ text: "默认消息提示！" });
};
</script>
