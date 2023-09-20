<!-- html -->
<template>
  <fx-switch v-model="switchVal" disabled></fx-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>
