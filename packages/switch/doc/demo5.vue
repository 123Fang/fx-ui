<!-- html -->
<template>
  <fx-switch
    v-model="switchVal"
    :showTipsText="true"
    closeColor="#ec3437"
    activeColor="#09b63d"
  ></fx-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>
