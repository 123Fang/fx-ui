<!-- html -->
<template>
  <fx-space>
    <fx-dropdown title="hover唤醒" :options="dorpoptions"></fx-dropdown>
    <fx-dropdown
      title="click唤醒"
      :options="dorpoptions"
      trigger="click"
    ></fx-dropdown>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1" },
    { label: "菜单2" },
    { label: "菜单3" },
    { label: "菜单4" },
    { label: "菜单5" },
  ],
});
const { dorpoptions } = state;
</script>
