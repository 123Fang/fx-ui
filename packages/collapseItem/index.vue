<template>
  <div class="fx-default-collapse-item-box">
    <div class="fx-collapse-item-title"  @click="togger(this)">
      <span>标题</span>
      <i class="fx-icon-arrow-right" :class="{rotate:boxshow}"></i>
    </div>
     <!-- v-show="boxshow" -->
    <transition name="slide-fade">
      <div class="fx-collapse-slot-box" v-show="boxshow">
        <div class="fx-slot-item-box">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, useSlots,getCurrentInstance  } from 'vue';
defineOptions({
  name:"fx-collapse-item"
})
const props = defineProps({
  name:String
})
const type = getCurrentInstance()
// console.log(type);
const slot = useSlots()
// console.log(slot);
// console.log(props.name);
const boxshow = ref(false)
const togger = (e) =>{
  // console.log(e.$parent.$el.children[0].lastChild);
  boxshow.value = !boxshow.value
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,.slide-fade-enter-from {
  height:62px;
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
  height:62px;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all .2s ease;
  height:0px;
}
.fx-default-collapse-item-box{
  height:auto;
  
  .fx-collapse-item-title{
    width:100%;
    height:40px;
    padding:0 10px;
    box-sizing: border-box;
    border-top:1px solid #f0f0f0;
    cursor: pointer;
    span{
      width: 98%;
      display: inline-block;
      line-height: 40px;
      float: left;
      font-size: 14px;
      color:#505050
    }
    i{
      float: right;
      text-align: right;
      line-height: 40px;
      transition: all .2s ease;
    }
    .rotate{
      transform: rotate(90deg);
    }
  }
  .fx-collapse-slot-box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .fx-slot-item-box{
      padding:10px 10px;
    }
  }
}
</style>
