<!-- html -->
<template>
  <fx-space>
    <fx-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#09b63d"
    >
    </fx-date>

    <fx-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#f57b29"
    >
    </fx-date>
  </fx-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>
