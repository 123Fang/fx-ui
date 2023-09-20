<!-- html -->
<template>
  <fx-dropdown title="下拉菜单" :options="dorpoptions"></fx-dropdown>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1", icon: "fx-icon-file" },
    { label: "菜单2", icon: "fx-icon-keyboard-9" },
    { label: "菜单3", icon: "fx-icon-link" },
    { label: "菜单4", icon: "fx-icon-file" },
  ],
});
const { dorpoptions } = state;
</script>
