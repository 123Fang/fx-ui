<!-- html -->
<template>
  <fx-button @click="openLoading">自定义加载图片</fx-button>
</template>

<!-- js -->
<script setup>
import Loading from "../index.js"; //此处为本地示例，请使用import { Loading } from "fx-ui";
  import logoUrl from '../../../src/assets/logo.jpeg'
  const openLoading = () => {
    Loading.show({
      text:"正在努力加载中...",
      img: logoUrl
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>
