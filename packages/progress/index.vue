
<template>
  <div class="fx-progress-default">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'fx-progress',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.fx-progress-default {}
</style>
