<!-- html -->
<template>
  <fx-space>
    <fx-input v-model="value1" leftIcon="fx-icon-search"></fx-input>
    <fx-input v-model="value2" rightIcon="fx-icon-calendar"></fx-input>
  </fx-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>
