<!-- html -->
<template>
  <fx-button @click="openLoading">开始加载</fx-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const openLoading = () => {
  instance.proxy.$Loading.show();
  setTimeout(() => {
    instance.proxy.$Loading.hide();
  }, 5000);
};
</script>
