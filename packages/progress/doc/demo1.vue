<!-- html -->
<template>
    <fx-progress :percent="20"></fx-progress>
    <fx-progress :percent="40" bgColor="#505050"></fx-progress>
    <fx-progress :percent="60" currentStatus="OTHER"></fx-progress>
    <fx-progress :percent="90" currentStatus="FAIL"></fx-progress>
    <fx-progress :percent="100" currentStatus="SUCCESS"></fx-progress>
</template>
<style scoped>
.fx-progress {
  margin-bottom: 10px;
}
</style>
