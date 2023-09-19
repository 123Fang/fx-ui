<!-- html -->
<template>
<div class="fx-style">
    <fx-progress
      :percent="20"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >
     <fx-button type="primary" size="mini" leftIcon="fx-icon-prompt" round></fx-button>
    </fx-progress>
    <fx-progress
      :percent="40"
      bgColor="#505050"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >progress</fx-progress>
    <fx-progress
      :percent="100"
      currentStatus="SUCCESS"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
    >
    FULL
    </fx-progress>
</div>
</template>
<style scoped>
.fx-style{
  display: flex;
  flex-wrap: wrap;
}
.fx-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
.fx-button-round {
  border-radius: 50%;
}
.fx-button-mini {
  padding: 4px;
}
</style>
