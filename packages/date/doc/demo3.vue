<!-- html -->
<template>
  <fx-space>
    <fx-date v-model="dateVal" placeholder="请选择日期"> </fx-date>
    <fx-date v-model="dateVal" placeholder="请选择日期" size="small"> </fx-date>
    <fx-date v-model="dateVal" placeholder="请选择日期" size="mini"> </fx-date>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>
