<!-- html -->
<template>
    <fx-progress :percent="20" roundCorner isAnimation :progressSpeed="5"></fx-progress>
    <fx-progress :percent="40" currentStatus="SUCCESS" roundCorner isAnimation></fx-progress>
    <fx-progress :percent="60" currentStatus="OTHER" roundCorner isAnimation :progressSpeed="2"></fx-progress>
    <fx-progress :percent="90" currentStatus="FAIL" roundCorner isAnimation :progressSpeed="1"></fx-progress>
    <fx-progress :percent="100" bgColor="#505050" roundCorner isAnimation :progressSpeed="6"></fx-progress>
</template>
<!-- js -->
<script setup>
const customColorMethod = (percent) => {
  if (percent < 70) {
    return '#909399'
  }
  return '#67c23a'
}
</script>
<style scoped>
.fx-progress {
  margin-bottom: 10px;
}
</style>
