<!-- html -->
<template>
  <fx-button @click="openLoading">更多自定义配置项</fx-button>
</template>

<!-- js -->
<script setup>
import { fLoading } from "fx-ui-vue"
  const openLoading = () => {
    fLoading.show({
      text:'正在加载fxl-ui...',
      icon:'fx-icon-loading3',
      scrollLock:true,
      textColor:'#333',
      bgColor:"rgba(248,253,255,.9)",
      showIcon:true,
    })
    setTimeout(()=>{
      fLoading.hide()
    },5000)
  }
</script>
