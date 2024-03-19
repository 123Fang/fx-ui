<!-- html -->
<template>
  <fx-button @click="openLoading">自定义加载图片</fx-button>
</template>

<!-- js -->
<script setup>
import { fLoading } from "fx-ui-vue"
  import logoUrl from '../../../src/assets/logo.jpeg'
  const openLoading = () => {
    fLoading.show({
      text:"正在努力加载中...",
      img: logoUrl
    })
    setTimeout(()=>{
      fLoading.hide()
    },5000)
  }
</script>
