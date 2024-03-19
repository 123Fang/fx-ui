<!-- html -->
<template>
  <fx-space>
    <fx-button @click="openLoading">点击加载</fx-button>
  </fx-space>
  <div id="loadingTextBox">
    <fx-table :options="options" size="small">
      <template #action>
        <fx-button type="text" leftIcon="fx-icon-edit" size="small">编辑</fx-button>
        <fx-button type="text" leftIcon="fx-icon-ashbin" style="color:#ec3437"  size="small">删除</fx-button>
      </template>
    </fx-table>
  </div>
</template>

<!-- js -->
<script setup>
  import { reactive } from 'vue';
import { fLoading } from "fx-ui-vue"
  const openLoading = () => {
    fLoading.show({
      target:"#loadingTextBox"
    })
    setTimeout(()=>{
      fLoading.hide()
    },5000)
  }
  const state = reactive({
    options:{
      fileds:[
        {"field":'name',"title":'姓名',"align":'center'},
        {"field":'job',"title":'职业'},
        {"field":'address',"title":'地址'},
        {"field":'from',"title":'籍贯'},
        {"field":'action',"title":'操作',"width":'200px',"align":'center'}
      ],
      datas:[
        {"name":'王小二',"job":'放羊娃',"address":'在那遥远的小山村',"from":"民间流传故事"},
        {"name":'猪八戒',"job":'徒弟',"address":'高老庄',"from":"西游记神话故事"},
        {"name":'刘老四',"job":'农民',"address":'可能在中国',"from":"想象出来的"},
        {"name":'白骨精',"job":'妖精',"address":'西游记',"from":"西游记神话故事"},
      ]
    }
  })
  const {options} = state
</script>
