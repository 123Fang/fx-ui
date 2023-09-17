<template>
  <div class="fx-row-default"><slot></slot></div>
</template>

<script setup>
defineOptions({
  name: 'fx-row'
})

</script>

<style lang="scss" scoped>
.fx-row-default{
  width:100%;
  height:auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
