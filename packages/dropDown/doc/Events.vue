<template>
  <fx-table :options="options" size="small"></fx-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "name", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "attr", title: "回调参数", align: "center" },
      { field: "exm", title: "示例", align: "center", width: "350px" },
    ],
    datas: [
      {
        name: "change",
        red: "下拉菜单选择事件",
        attr: "(value: item,index)",
        exm: "change = (item,index) =>{console.log(item,index)}",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>
