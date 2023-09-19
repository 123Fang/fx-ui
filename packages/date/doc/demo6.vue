<!-- html -->
<template>
  <fx-space>
    <fx-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy年MM月dd日"
    ></fx-date>
    <fx-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy/MM/dd"
    ></fx-date>
    <fx-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy-MM-dd"
    ></fx-date>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>
