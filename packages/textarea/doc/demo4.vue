<!-- html -->
<template>
  <fx-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    focusColor="#ec3437"
  ></fx-textarea>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const textareaVal = ref("");
</script>
