<template>
  <div :class="[`fx-checkbox-${size}`,customClass]">
    <label v-for="(item,index) in checkOptions" :key="index" class="fx-checkbox-label" :class="[{'fx-checkbox-label-active':item.checked},item.checked?item.disabled?'fx-checkbox-label-active-disabled':'':item.disabled?'fx-checkbox-label-disabled':'']" @click="checkChange(item,index)"  :style="{'display':inline?'inline-block':'table','margin-bottom':inline?'0':size=='small'?'8px':size=='mini'?'6px':'10px'}">
      <span class="fx-checkbox-selectbox"  :style="{'border-color':customColor==''?'':item.disabled?'':item.checked?customColor:'','background':customColor==''?'':item.disabled?'':item.checked?customColor:''}"></span>
      <span :style="{'color':customColor==''?'':item.disabled?'':item.checked?customColor:''}">{{item[labelFiled]}}</span>
    </label>
  </div>
</template>
<script>
export default {
  name:"fx-checkbox"
}
</script>
<script setup>
import {ref} from 'vue'
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue:{
    type:Array,
    default:()=>{
      return []
    }
  },
  size:{
    type:String,
    default:'default'
  },
  options:{
    type:Array,
    default:()=>{
      return []
    }
  },
  labelFiled:{
    type:String,
    default:"label"
  },
  valueFiled:{
    type:String,
    default:"value"
  },
  inline:{
    type:Boolean,
    default:true
  },
  customColor:String,
  customClass:String
})
const checkOptions = ref(props.options||[])
checkOptions.value.forEach((item)=>{
  item.checked = false
  props.modelValue.forEach((item1)=>{
    if(item[props.valueFiled] === item1){
      item.checked = true
    }
  })
  
})
const checkChange = (item,index) =>{
  let checkData = []
  if(!item.disabled){
    item.checked = !item.checked
  }
  checkOptions.value.forEach((item,index)=>{
    if(item.checked){
      checkData.push(item[props.valueFiled])
    }
  })
  emit('update:modelValue',checkData)
  emit('change',{"value":checkData,"index":index})
}
</script>

<style lang="scss" scoped>
.fx-checkbox-default{
  width: auto;
  height:auto;
  overflow: hidden;
  .fx-checkbox-label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;
    span{
      float: left;
      color: #505050;
      font-size: 14px;
    }
    .fx-checkbox-selectbox{
      width:14px;
      height: 14px;
      border-radius: 4px;
      display: inline-block;
      border:1px solid #b9b9b9;
      margin: 3.2px 8px 0 0;
      background: #fff;
      position: relative;
      float:left;
      font-size:14px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;
      &::after{
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 3px;
        height: 7.5px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width:   0 2px 2px 0 ;
        position: absolute;
        left:4px;
        transition: transform 0.15s ease-in;
      }
    }
  }
  .fx-checkbox-label-active{
    span{
      color:#0e80eb
    }
    .fx-checkbox-selectbox{
      border:1px solid #0e80eb;
      background: #0e80eb;
      &::after{
        border-color: #fff;
      }
    }
  }
  .fx-checkbox-label-active-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #999999;
      }
    }
  }
  .fx-checkbox-label-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #ebebeb;
      }
    }
  }
}

// small

.fx-checkbox-small{
  width: auto;
  height:auto;
  overflow: hidden;
  .fx-checkbox-label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 13px;
    margin-right: 15px;
    user-select: none;
    span{
      float: left;
      color: #505050;
      font-size: 13px;
    }
    .fx-checkbox-selectbox{
      width:13px;
      height: 13px;
      border-radius: 3px;
      display: inline-block;
      border:1px solid #b9b9b9;
      margin: 3.5px 8px 0 0;
      background: #fff;
      position: relative;
      float:left;
      font-size:13px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;
      &::after{
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2.5px;
        height: 6.5px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width:   0 2px 2px 0 ;
        position: absolute;
        left:3px;
        transition: transform 0.15s ease-in;
      }
    }
  }
  .fx-checkbox-label-active{
    span{
      color:#0e80eb
    }
    .fx-checkbox-selectbox{
      border:1px solid #0e80eb;
      background: #0e80eb;
      &::after{
        border-color: #fff;
      }
    }
  }
  .fx-checkbox-label-active-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #999999;
      }
    }
  }
  .fx-checkbox-label-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #ebebeb;
      }
    }
  }
}

// mini

.fx-checkbox-mini{
  width: auto;
  height:auto;
  overflow: hidden;
  .fx-checkbox-label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 14px;
    user-select: none;
    span{
      float: left;
      color: #505050;
      font-size: 12px;
    }
    .fx-checkbox-selectbox{
      width:12px;
      height: 12px;
      border-radius: 2px;
      display: inline-block;
      border:1px solid #b9b9b9;
      margin: 4.3px 8px 0 0;
      background: #fff;
      position: relative;
      float:left;
      font-size:12px;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;
      &::after{
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2px;
        height: 6px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width:   0 2px 2px 0 ;
        position: absolute;
        left:3px;
        transition: transform 0.15s ease-in;
      }
    }
  }
  .fx-checkbox-label-active{
    span{
      color:#0e80eb
    }
    .fx-checkbox-selectbox{
      border:1px solid #0e80eb;
      background: #0e80eb;
      &::after{
        border-color: #fff;
      }
    }
  }
  .fx-checkbox-label-active-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #999999;
      }
    }
  }
  .fx-checkbox-label-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .fx-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #ebebeb;
      }
    }
  }
}
</style>
