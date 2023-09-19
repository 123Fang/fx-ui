<!-- html -->
<template>
  <fx-menu :options="menuOptions">
    <fx-dropdown
      title="下拉菜单"
      :options="dorpoptions"
      size="small"
    ></fx-dropdown>
  </fx-menu>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  menuOptions: [
    {
      title: "菜单1",
    },
    {
      title: "菜单2",
      children: [
        {
          title: "菜单2-1",
        },
        {
          title: "菜单2-2",
        },
        {
          title: "菜单2-3",
          children: [
            {
              title: "菜单2-3-1",
              children: [
                {
                  title: "菜单2-3-1-1",
                },
                {
                  title: "菜单2-3-1-2",
                },
              ],
            },
            {
              title: "菜单2-3-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单3",
      children: [
        {
          title: "菜单3-1",
        },
        {
          title: "菜单3-2",
        },
      ],
    },
    {
      title: "菜单4",
      children: [
        {
          title: "菜单4-1",
          children: [
            {
              title: "菜单4-1-1",
            },
            {
              title: "菜单4-1-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单5",
      children: [
        {
          title: "菜单3-1",
        },
      ],
    },
    {
      title: "菜单6",
    },
  ],
  dorpoptions: [
    { label: "下拉菜单", icon: "fx-icon-file" },
    { label: "下拉菜单", icon: "fx-icon-keyboard-9" },
    { label: "下拉菜单", icon: "fx-icon-link" },
    { label: "下拉菜单", icon: "fx-icon-file" },
    { label: "下拉菜单", icon: "fx-icon-file" },
  ],
});
const { menuOptions, dorpoptions } = state;
</script>
