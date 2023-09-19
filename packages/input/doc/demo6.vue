<!-- html -->
<template>
  <fx-input v-model="value1" clearable>
    <template #btn>
      <fx-button type="primary" leftIcon="fx-icon-search">搜索</fx-button>
    </template>
  </fx-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>
