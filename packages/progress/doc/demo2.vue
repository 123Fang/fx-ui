<!-- html -->
<template>
    <fx-progress :progressHeight="26" :percent="20" isShowText></fx-progress>
    <fx-progress :progressHeight="26" :percent="40" bgColor="#505050" isShowText></fx-progress>
    <fx-progress :progressHeight="26" :percent="60" currentStatus="OTHER" isShowText></fx-progress>
    <fx-progress :progressHeight="26" :percent="90" currentStatus="FAIL" isShowText></fx-progress>
    <fx-progress :progressHeight="26" :percent="100" currentStatus="SUCCESS" isShowText></fx-progress>
</template>
<style scoped>
.fx-progress {
  margin-bottom: 10px;
}
</style>
