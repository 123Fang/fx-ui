<!-- html -->
<template>
  <fx-space :inline="false">
    <fx-radio
      v-model="radioVal"
      :options="radioOptions"
      customColor="#09b63d"
    ></fx-radio>
    <fx-radio
      v-model="radioVal"
      :options="radioOptions"
      customColor="#25B0F8"
    ></fx-radio>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("zhongguo");
const state = reactive({
  radioOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { radioOptions } = state;
</script>
