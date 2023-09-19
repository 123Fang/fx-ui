<!-- html -->
<template>
  <fx-space :inline="false">
    <fx-checkbox v-model="checkboxVal" :options="checkOptions"></fx-checkbox>
    <fx-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      size="small"
    ></fx-checkbox>
    <fx-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      size="mini"
    ></fx-checkbox>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([]);
const state = reactive({
  checkOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { checkOptions } = state;
</script>
