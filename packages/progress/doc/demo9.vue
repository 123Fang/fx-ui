<!-- html -->
<template>
<div class="fx-style">
    <fx-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="120"
      :circleHeight="10"
      currentStatus="SUCCESS"
      isShowText
    >
    </fx-progress>
    <fx-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="150"
      :circleHeight="10"
      currentStatus="OTHER"
      isShowText
    >
    </fx-progress>
    <fx-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="200"
      :circleHeight="10"
      currentStatus="FAIL"
      isShowText
    >
    </fx-progress>
</div>
</template>
<script setup>
  import {ref} from 'vue'
  const percent = ref(0)
  setTimeout(()=>{
    percent.value += 55
  },500)
</script>
<style scoped>
.fx-style{
  display: flex;
  flex-wrap: wrap;
}
.fx-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
