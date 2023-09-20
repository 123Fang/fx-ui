<!-- html -->
<template>
  <fx-space>
    <fx-dropdown title="下拉菜单" :options="dorpoptions">
      <template #Img>
        <img src="../../../src/assets/logo.jpeg" alt="" />
      </template>
    </fx-dropdown>

    <fx-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="small"
    >
      <template #Img>
        <img src="../../../src/assets/logo.jpeg" alt="" />
      </template>
    </fx-dropdown>

    <fx-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      @change="dropchange"
      size="mini"
    >
      <template #Img>
        <img src="../../../src/assets/logo.jpeg" alt="" />
      </template>
    </fx-dropdown>
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
