<!-- html -->
<template>
    <fx-progress :percent="20" :setPercentText="textMethod" roundCorner></fx-progress>
    <fx-progress :percent="40" bgColor="#505050" roundCorner>百分之40</fx-progress>
    <fx-progress :percent="60" currentStatus="OTHER" roundCorner><i class="fx-icon-arrow-double-right"></i></fx-progress>
    <fx-progress :percent="90" :setPercentText="textMethod" currentStatus="FAIL" roundCorner></fx-progress>
    <fx-progress :percent="100" :progressHeight="20" currentStatus="SUCCESS" roundCorner>
    <fx-button type="success" size="mini" round>完成</fx-button>
    </fx-progress>
</template>
<!-- js -->
<script setup>
const textMethod = (percent) => {
  if (percent < 70) {
    return 'ing'
  }
  return 'fail'
}
</script>
<style scoped>
.fx-progress {
  margin-bottom: 10px;
}
.fx-button-mini {
  padding: 3px;
  font-size: 12px;
}
</style>
