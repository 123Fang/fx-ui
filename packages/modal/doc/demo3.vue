<!-- html -->
<template>
  <fx-button @click="openModal">自定义</fx-button>
  <fx-modal v-model="modalShow" :closeOnModal="false">
    <template #header>
      <i class="fx-icon-email" style="font-size: 17px"></i> 新的邮件
    </template>
    <template #content>
      <fx-input
        v-model="value"
        clearable
        @clear="clear"
        placeholder="请输入"
      ></fx-input>
      <p>输入的值为：{{ value }}</p>
    </template>
    <template #footer>
      <fx-button type="primary" size="small" @click="send">发送</fx-button>
    </template>
  </fx-modal>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import { fMessage } from "fx-ui-vue"
const modalShow = ref(false);
const value = ref("");
const openModal = () => {
  modalShow.value = true;
};
const send = () => {
  if (value.value == "") {
    fMessage({ type: "warn", text: "请输入内容!" });
  } else {
    modalShow.value = false;
    setTimeout(() => {
      fMessage({ type: "success", text: "发送成功!" });
    }, 500);
  }
};
</script>
