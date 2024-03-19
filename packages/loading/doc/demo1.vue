<!-- html -->
<template>
  <fx-button @click="openLoading">开始加载</fx-button>
</template>

<!-- js -->
<script setup>
import { fLoading } from "fx-ui-vue";
const openLoading = () => {
  fLoading.show();
  setTimeout(() => {
    fLoading.hide();
  }, 5000);
};
</script>
