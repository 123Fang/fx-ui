
<template>
  <div class='fx-confirm-default'>
    <slot />
  </div>
</template>

<script setup>
import { defineOptions, ref } from 'vue'

defineOptions({
  name: 'fx-confirm',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style scoped lang='scss'>
.fx-confirm-default {}
</style>
