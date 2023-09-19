<template>
  <fx-row>
    <fx-col :span="10"><div class="col-box-2 col-box">10</div></fx-col>
    <fx-col :span="12" :offset="2"
      ><div class="col-box-1 col-box">12</div></fx-col
    >
  </fx-row>
  <fx-row>
    <fx-col :span="8"><div class="col-box-1 col-box">8</div></fx-col>
    <fx-col :span="8" :offset="8"><div class="col-box-1 col-box">8</div></fx-col>
  </fx-row>
  <fx-row>
    <fx-col :span="2"><div class="col-box-2 col-box">2</div></fx-col>
    <fx-col :span="6" :offset="4"><div class="col-box-1 col-box">6</div></fx-col>
    <fx-col :span="6" :offset="6"><div class="col-box-2 col-box">6</div></fx-col>
  </fx-row>
  <fx-row>
    <fx-col :span="4"><div class="col-box-1 col-box">4</div></fx-col>
    <fx-col :span="2" :offset="4"><div class="col-box-2 col-box">2</div></fx-col>
    <fx-col :span="4" :offset="2"><div class="col-box-1 col-box">4</div></fx-col>
    <fx-col :span="6" :offset="2"><div class="col-box-2 col-box">6</div></fx-col>
  </fx-row>
</template>

<style lang="scss" scoped>
.col-box {
  height: 34px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 34px;
}
.col-box-1 {
  background-color: #9eaaaf;
  color: #333;
}
.col-box-2 {
  background-color: #505050;
  color: #fff;
}
</style>
