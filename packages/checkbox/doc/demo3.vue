<!-- html -->
<template>
  <fx-checkbox v-model="checkboxVal" :options="checkOptions"></fx-checkbox>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(["zhongguo"]);
const state = reactive({
  checkOptions: [
    { label: "中国", value: "zhongguo", disabled: true },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo", disabled: true },
    { label: "法国", value: "faguo" },
  ],
});
const { checkOptions } = state;
</script>
