<template>
  <Teleport to="body">
    <transition name="fade">
      <div :class="['fx-modal-default',customClass]" v-if="modelValue" @click="closeModal($event)">
        <div class="fx-modal-contentbox" :style="{'width':width,'top':top}">
          <div class="fx-modal-header">
            <p class="fx-modal-title" :style="{'text-align':align=='center'?align:''}">
              <slot name="header" v-if="$slot['header']"></slot>
              <span v-else>{{title}}</span>
            </p>
            <i class="fx-modal-close fx-icon-close" @click="close" v-if="showClose"></i>
          </div>
          <div class="fx-modal-content">
            <slot name="content"></slot>
          </div>
          <div class="fx-modal-footer" :style="{'text-align':align=='center'?align:''}">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport> 
</template>

<script setup>
import { useSlots, ref, watchEffect, onMounted } from 'vue'
defineOptions({
  name:"fx-modal"
})
const props = defineProps({
  title:{
    type:String,
    default:"标题"
  },
  modelValue:Boolean,
  align:{
    type:String,
    default:""
  },
  scrollLock: {
    type:Boolean,
    default:true
  },
  width:{
    type:String,
    default:'35%'
  },
  top:{
    type:String,
    default:'15%'
  },
  showClose:{
    type:Boolean,
    default:true
  },
  closeOnModal:{
    type:Boolean,
    default:true
  },
  customClass:String
})
const emit = defineEmits(['update:modelValue','close'])
const $slot = useSlots()
const close = () =>{
  emit('close')
  emit('update:modelValue',false)
}
onMounted(() => {
  watchEffect(()=>{
    if(props.modelValue){
      if(props.scrollLock){
        if(typeof document !== 'undefined'){
          document.body.style['overflow'] = 'hidden'
        }
      }
    }else{
      if(typeof document !== 'undefined'){
        document.body.style['overflow'] = 'initial'
      }
    }
  })
})
const closeModal = (e) =>{
  if(props.closeOnModal){
    if(e.target.className=='fx-modal-default'){
      emit('update:modelValue',false)
      emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fx-modal-default{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,.4);
  z-index: 8880;
  .fx-modal-contentbox{
    width:35%;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 12px 0 rgba(7, 7, 7, 0.1);
    .fx-modal-header{
      width:100%;
      height: 50px;
      position: relative;
      padding:0 20px;
      box-sizing: border-box;
      border-bottom:1px solid #f0f0f0;
      .fx-modal-title{
        margin:0;
        line-height: 50px;
        color:#505050;
        font-size:17px;
      }
      i.fx-modal-close{
        line-height: 50px;
        font-size:17px;
        position: absolute;
        right:20px;
        top:0;
        cursor: pointer;
      }
    }
    .fx-modal-content{
      padding:20px;
      box-sizing: border-box;
    }
    .fx-modal-footer{
      border-top:1px solid #f0f0f0;
      text-align: right;
      padding:10px 20px;
      box-sizing: border-box;
    }
  }
}
</style>
