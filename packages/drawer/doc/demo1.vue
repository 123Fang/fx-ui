<!-- html -->
<template>
  <fx-button @click="openDrawer">基本使用</fx-button>
  <fx-drawer
    v-model="drawerShow"
    title="基本使用"
    @confirm="confirmFn"
    @cancel="cancelFn"
  >
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </fx-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import { fMessage } from 'fx-ui-vue'
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
const confirmFn = () => {
  fMessage({ text: "确认事件" });
};
const cancelFn = () => {
  fMessage({ text: "取消事件" });
};
</script>
