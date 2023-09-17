<template>
  <div class="fx-defalu-collapse-box" ref="collapseRef">
    <slot></slot>
  </div>
</template>

<script setup>
import fxCollapseItem from "../collapseItem/index.vue";
import { onMounted, ref, getCurrentInstance } from "vue";
defineOptions({
  name: 'fx-collapse'
})
const collapseRef = ref(null);
const type = getCurrentInstance();
onMounted(() => {
  // console.log(collapseRef.value);
});
</script>

<style lang="scss" scoped>
.fx-defalu-collapse-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
}
</style>
