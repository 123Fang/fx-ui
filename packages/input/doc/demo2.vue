<!-- html -->
<template>
  <fx-input v-model="value1" disabled placeholder="禁用状态"></fx-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>
