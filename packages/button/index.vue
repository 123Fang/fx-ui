<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span :style="{'margin-left':leftIcon?'4px':'','margin-right':rightIcon?'4px':''}"><slot/></span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script>
  export default {
    name:"fx-button"
  }
</script>
<script setup>
  import {computed} from 'vue'
  const props = defineProps({
    type:{
      type:String,
      default:'default'
    },
    disabled:Boolean,
    round:Boolean,
    size:{
      type:String,
      default:'default'
    },
    customColor:{
      type:String,
      default:''
    },
    leftIcon:String,
    rightIcon:String,
    localing:Boolean
  })
  const mBtnDeaultStyle = {
     background:props.customColor,
     border:props.customColor,
     color:'#fff'
  }
  const isClass = computed(()=>{
    return [
      props.size=='default'?'fx-button':props.size=='medium'?'fx-button-medium':props.size=='small'?'fx-button-small':props.size=='mini'?'fx-button-mini':'fx-button',
      props.type?props.disabled?'':`fx-button-${props.type}`:'',
      props.disabled?`fx-button-${props.type}-disabled`:'',
      {
        'fx-button-round':props.round
      }
    ]
  })
  const isIconClass = computed(()=>{
    return [
      'iconfont',
      props.leftIcon||props.rightIcon,
      props.localing?props.leftIcon=='fx-icon-loading1'||props.leftIcon=='fx-icon-loading2'||props.leftIcon=='fx-icon-loading3'||props.leftIcon=='fx-icon-loading4'||props.leftIcon=='fx-icon-loading5'||props.leftIcon=='fx-icon-loading6'||props.rightIcon=='fx-icon-loading1'||props.rightIcon=='fx-icon-loading2'||props.rightIcon=='fx-icon-loading3'||props.rightIcon=='fx-icon-loading4'||props.rightIcon=='fx-icon-loading5'||props.rightIcon=='fx-icon-loading6'?'fx-icon-loading':'':''
    ]
  })
  const styles = computed(()=>{
    return [
      props.customColor==''?{}:props.type=='default'?{}:mBtnDeaultStyle
    ]
  })
</script>
<style>
@import url('../../styles/iconfont.css');
@import url('../../styles/main.css');
</style>
<style scoped lang="scss">
  
 .fx-button{
   padding:10px 20px;
   outline:none;
   cursor: pointer;
   font-size:14px;
   border-radius:2px;
   background: #fff;
   transition:all .15s ease;
   user-select: none;
   overflow: hidden;
   line-height: 1;
   white-space: nowrap;
   i{
      
    }
   span{
     display: inline-block;
  }
   
 }
 .fx-button-medium{
   padding:8px 18px;
   outline:none;
   cursor: pointer;
   font-size:14px;
   border-radius:2px;
   background: #fff;
   transition:all .15s ease;
   user-select: none;
   overflow: hidden;
   line-height: 1;
   white-space: nowrap;
   i{
      font-size:14px;
    }
 }
 .fx-button-small{
   padding:7px 13px;
   outline:none;
   cursor: pointer;
   font-size:13px;
   border-radius:2px;
   background: #fff;
   transition:all .15s ease;
   user-select: none;
   overflow: hidden;
   line-height: 1;
   white-space: nowrap;
   i{
      font-size:13px;
    }
 }
 .fx-button-mini{
   padding:7px 13px;
   outline:none;
   cursor: pointer;
   font-size:12px;
   border-radius:2px;
   background: #fff;
   transition:all .15s ease;
   user-select: none;
   overflow: hidden;
   line-height: 1;
   white-space: nowrap;
   i{
      font-size:12px;
    }
 }
 .fx-button-round{
   border-radius:22px;
 }
 .fx-button-default{
   border:1px solid #d9d9d9;
   background: #fff;
   color:#333;
   &:hover{
     color:#0e80eb;
     border-color: #0e80eb;
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
 .fx-button-custom{
   color:#333;
   &:hover{
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
 .fx-button-primary{
   border:1px solid #0e80eb ;
   color:#fff;
   background-color:#0e80eb;
   &:hover{
     opacity: .8;
   }
   &:active{
     opacity: 1;
   }
 }
.fx-button-success{
   border:1px solid #09b63d ;
   color:#fff;
   background-color:#09b63d;
   &:hover{
     opacity: .8;
   }
   &:active{
     opacity: 1;
   }
 }
 .fx-button-danger{
   border:1px solid #ec3437;
   background: #ec3437;
   color:#fff;
   &:hover{
     color:#fff;
     border-color: #ec3437;
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
  .fx-button-warning{
   border:1px solid #f57b29;
   background: #f57b29;
   color:#fff;
   &:hover{
     color:#fff;
     border-color: #f57b29;
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
 .fx-button-text{
   border:1px solid #fff;
   background: none;
   color:#0e80eb;
   padding:0 5px;
   &:hover{
     color:#0e80eb;
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
 .fx-button-dashed{
   border:1px dashed #d9d9d9;
   background: #fff;
   color:#333;
   &:hover{
     color:#0e80eb;
     border-color: #0e80eb;
     opacity:.8
   }
   &:active{
     opacity: 1;
   }
 }
 
 .fx-button-default-disabled{
   cursor: no-drop;
   border:1px solid #d9d9d9;
   background: #fff;
   opacity: .5;
   color: #333;
 }
 .fx-button-primary-disabled{
   cursor: no-drop;
   border:1px solid #0e80eb;
   background: #0e80eb;
   opacity: .5;
   color:#fff;
 }
.fx-button-success-disabled{
   cursor: no-drop;
   border:1px solid #09b63d;
   background: #09b63d;
   opacity: .5;
   color:#fff;
 }
.fx-button-danger-disabled{
   cursor: no-drop;
   border:1px solid #ec3437;
   background: #ec3437;
   opacity: .5;
   color:#fff;
}
.fx-button-warning-disabled{
   cursor: no-drop;
   border:1px solid #f57b29;
   background: #f57b29;
   opacity: .5;
   color:#fff;
}
.fx-button-dashed-disabled{
   cursor: no-drop;
   border:1px solid #d9d9d9;
   background: #fff;
   opacity: .5;
   color: #333;
 }
  .fx-button-text-disabled{
   cursor: no-drop;
   border:1px solid #fff;
   background: none;
   opacity:.5;
   color:#0e80eb;
 }
 .fx-button-custom-disabled{
   cursor: no-drop;
   opacity:.5;
 }

 .fx-icon-loading{
   animation: icon-loading 1.5s linear infinite;
    -webkit-animation: icon-loading 1.5s linear infinite;
 }
@keyframes icon-loading{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
</style>
