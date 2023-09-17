
<template>
  <div class="fx-col-default"><slot></slot></div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'fx-col'
})
const props = defineProps({
  span:{
    type:Number,
    default:24
  },
  offset:Number
})
const width = ref(props.span<=24?props.span%1==0?(100/24)*props.span+'%':'':'')
const offset = ref(props.offset<=24?props.offset%1==0?(100/24)*props.offset+'%':'':'')
</script>

<style lang="scss" scoped>
.fx-col-default{
  width:v-bind(width);
  float: left;
  margin-left:v-bind(offset)
}
</style>
