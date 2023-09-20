<!-- html -->
<template>
  <fx-switch v-model="switchVal" :showTipsText="true"></fx-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>
