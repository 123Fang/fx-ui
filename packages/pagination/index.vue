<template>
  <div :class="['fx-pagination-box',`fx-pagination-${size}`,{'fx-pagination-disabled':disabled}]" :style="{'text-align':align}">
    <div class="fx-pagination-inlinebox">
      <div class="fx-pagination-pagebox">
        <span class="fx-total" v-if="showTotal">共 {{total}} 条</span>
        <span :class="['fx-prev-text-text',{'fx-prev-text-text-disabled':currentPage<=1}]" @click="prevChange" v-if="prevText!=''">{{prevText}}</span>
        <span :class="['fx-prev-text fx-text-box',{'fx-prev-text-disabled':currentPage<=1}]" @click="prevChange" v-if="prevText==''||prevText==undefined"><i class="fx-icon-arrow-left-bold"></i></span>
        <div class="fx-block-box" :style="{'width':(pageSize<=10&&Math.ceil(total/pageSize)<=10)?'auto':((size=='small'?32:36)*maxSize+'px')}">
          <div class="fx-block-margin-box" :style="{'width':(pageSize<=10&&Math.ceil(total/pageSize)<=10)?'auto':((size=='small'?32:36)*Math.ceil(total/pageSize)+'px'),'margin-left':marginLeft+'px'}">
            <li :class="['fx-block-li',{'fx-block-li-active':currentPage-1==index}]" v-for="(item,index) in Math.ceil(total/pageSize)" :key="index" @click="change(index+1)">{{index+1}}</li>
          </div>
        </div>
        <span :class="['fx-next-text fx-text-box',{'fx-next-text-disabled':currentPage>=total/pageSize}]" @click="nextChange" v-if="nextText==''||nextText==undefined"><i class="fx-icon-arrow-right-bold"></i></span>
        <span :class="['fx-next-text-text',{'fx-next-text-text-disabled':currentPage>=total/pageSize}]" @click="nextChange" v-if="nextText!=''">{{nextText}}</span>
        <div class="to-next-page-box" v-if="jumper">
          <span>跳至</span>
          <span class="input-span"><m-input :size="size=='small'?'mini':'small'" v-model="currentPage" @change="topage" :disabled="disabled"></m-input></span>
          <span>页</span>
        </div> 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import mInput from '../input';
defineOptions({
  name: 'fx-pagination'
})
const emit = defineEmits(['update:current','change'])
const props = defineProps({
  total:Number,
  current:{
    type:Number,
    default:1
  },
  pageSize:{
    type:Number,
    default:10
  },
  maxSize:{
    type:Number,
    default:10
  },
  align:{
    type:String,
    default:"left"
  },
  prevText:String,
  nextText:String,
  disabled:Boolean,
  activeColors:{
    type:Object,
    default:()=>{
      return {
        "background":"#fff",
        "hoverBackground":"#fff",
        "borderColor":"#d9d9d9",
        "hoverBorderColor":"#0e80eb",
        "color":"#505050",
        "hoverColor":"#0e80eb"
      }
    }
  },
  border:{
    type:Boolean,
    default:true
  },
  size:{
    type:String,
    default:"default"
  },
  showTotal:Boolean,
  jumper:Boolean
})
const currentPage = ref(props.current||0)
const marginLeft = ref(0)
const colors = ref(props.activeColors)
const border = ref(props.border)
const prevChange = () =>{
  if(!props.disabled){
    if(currentPage.value>1){
      currentPage.value-=1
      emit('update:current',currentPage.value)
      emit('change',currentPage.value)
      if(Math.ceil(props.total/props.pageSize)>props.maxSize){
        if(currentPage.value>props.maxSize/2){
          marginLeft.value+=(props.size=='small'?32:36)
        }
      }
    }
  }
}
const nextChange = () =>{
  if(!props.disabled){
    if(currentPage.value<Math.ceil(props.total/props.pageSize)){
      currentPage.value+=1
      emit('update:current',currentPage.value)
      emit('change',currentPage.value)
      if(Math.ceil(props.total/props.pageSize)>props.maxSize){
        if(currentPage.value>props.maxSize/2){
          marginLeft.value-=(props.size=='small'?32:36)
        }
      }
    }
  }
  
}
const change = (index) => {
  if(!props.disabled){
    currentPage.value = index
    emit('update:current',currentPage.value)
    emit('change',currentPage.value)
    if(Math.ceil(props.total/props.pageSize)>props.maxSize){
      if(currentPage.value>props.maxSize/2){
        marginLeft.value=(currentPage.value-props.maxSize/2)*-(props.size=='small'?32:36)
      }else if(currentPage.value<=props.maxSize/2){
        marginLeft.value = 0
      }else if(props.pageSize-currentPage.value<props.maxSize/2){
        marginLeft.value = ((Math.ceil(props.total/props.pageSize))-props.maxSize)*-(props.size=='small'?32:36)
      }
    }
  }
  
}
const topage = (e) =>{
  if(!props.disabled){
    if(parseInt(e.target.value)<=Math.ceil(props.total/props.pageSize)){
      currentPage.value = e.target.value
      emit('update:current',currentPage.value)
      emit('change',currentPage.value)
      if(Math.ceil(props.total/props.pageSize)>props.maxSize){
        if(currentPage.value>props.maxSize/2){
          marginLeft.value=(currentPage.value-props.maxSize/2)*-(props.size=='small'?32:36)
        }else if(currentPage.value<=props.maxSize/2){
          marginLeft.value = 0
        }else if(props.pageSize-currentPage.value<props.maxSize/2){
          marginLeft.value = ((Math.ceil(props.total/props.pageSize))-props.maxSize)*-(props.size=='small'?32:36)
        }
      }
    }else{
      currentPage.value = Math.ceil(props.total/props.pageSize)
      emit('update:current',currentPage.value)
      emit('change',currentPage.value)
      if(Math.ceil(props.total/props.pageSize)>props.maxSize){
        if(currentPage.value>props.maxSize/2){
          marginLeft.value=(currentPage.value-props.maxSize/2)*-(props.size=='small'?32:36)
        }else if(currentPage.value<=props.maxSize/2){
          marginLeft.value = 0
        }else if(props.pageSize-currentPage.value<props.maxSize/2){
          marginLeft.value = ((Math.ceil(props.total/props.pageSize))-props.maxSize)*-(props.size=='small'?32:36)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fx-pagination-box,.fx-pagination-default{
  width:100%;
  height:auto;
  overflow: hidden;
  text-align: left;
  .fx-pagination-inlinebox{
    display: inline-block;
    .fx-pagination-pagebox{
      display: flex;
      .fx-total{
        font-size:14px;
        color:#505050;
        line-height: 30px;
        margin-right:5px;
      }
      .fx-text-box{
        width:30px;
        height:30px;
        float: left;
        border:v-bind("border?'1px solid #d9d9d9':none");
        border-color: v-bind('colors.borderColor');;
        text-align: center;
        line-height: 28px;
        transition: all .2s ease;
        cursor: pointer;
        color:v-bind('colors.color');
        user-select: none;
        box-sizing: border-box;
        background: v-bind('colors.background');
        &:hover{
          border-color:v-bind('colors.hoverBorderColor');
          color:v-bind('colors.hoverColor');
          background: v-bind('colors.hoverBackground');
        }
      }
      .to-next-page-box{
        float: left;
        line-height: 30px;
        margin-left:6px;
        color:#505050;
        font-size:14px;
        span{
          float: left;
          margin:0 3px;
        }
        span.input-span{
          width:40px
        }
        span.input-span:deep(.fx-input-small input){
          padding: 7px 10px 7px 10px;
        }
      }
      .fx-prev-text{
        margin-right:3px;
      }
      .fx-prev-text-text{
        line-height: 30px;
        font-size:14px;
        color:v-bind('colors.color');
        margin-right:3px;
        cursor: pointer;
        user-select: none;
        &:hover{
          color:v-bind('colors.hoverColor');
        }
      }
      .fx-next-text-text{
        line-height: 30px;
        font-size:14px;
        color:v-bind('colors.color');
        margin-left:3px;
        cursor: pointer;
        user-select: none;
        &:hover{
          color:v-bind('colors.hoverColor');
        }
      }
      .fx-prev-text-text-disabled,.fx-next-text-text-disabled{
        color:#808080;
        cursor: no-drop;
        &:hover{
          color:#808080;
          background: v-bind('colors.hoverBackground');
        }
      }
      .fx-next-text{
        margin-left:3px;
      }
      .fx-prev-text-disabled,.fx-next-text-disabled{
        background: #f5f5f5;
        color:#808080;
        cursor: no-drop;
        &:hover{
          border-color: #d9d9d9;
          color:#808080;
          background: #f5f5f5;
        }
      }
      .fx-block-box{
        float: left;
        overflow: hidden;
        .fx-block-margin-box{
          width: 100%;
          height: 32px;
          overflow: hidden;
        }
        .fx-block-li{
          width:30px;
          height:30px;
          float: left;
          margin:0 3px;
          list-style: none;
          border:v-bind("border?'1px solid #d9d9d9':none");
          border-color: v-bind('colors.borderColor');
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          color:v-bind('colors.color');
          user-select: none;
          box-sizing: border-box;
          font-size:14px;
          background: v-bind('colors.background');
          &:hover{
            border-color:v-bind('colors.hoverBorderColor');
            color:v-bind('colors.hoverColor');
            background: v-bind('colors.hoverBackground');
          }
        }
        .fx-block-li-active{
          border-color:v-bind('colors.hoverBorderColor');
          color:v-bind('colors.hoverColor');
          background: v-bind('colors.hoverBackground');
        }
      }
    }
  }
}

.fx-pagination-small{
  .fx-pagination-inlinebox{
    .fx-pagination-pagebox{
      .fx-total{
        font-size:13px;
        color:#505050;
        line-height: 28px;
        margin-right:4px;
      }
      .fx-text-box{
        width:28px;
        height:28px;
        line-height: 27px;
        font-size:13px;
      }
      .to-next-page-box{
        float: left;
        line-height: 28px;
        margin-left:4px;
        color:#505050;
        
        span{
          float: left;
          margin:0 2px;
        }
        span.input-span{
          width:38px
        }
        span.input-span:deep(.fx-input-small input){
          padding: 7px 10px 7px 10px;
        }
      }
      .fx-prev-text{
        margin-right:2px;
      }
      .fx-prev-text-text{
        line-height: 28px;
        margin-right:2px;
      }
      .fx-next-text-text{
        line-height: 28px;
        font-size:14px;
        margin-left:2px;
      }
      .fx-next-text{
        margin-left:2px;
      }
      .fx-block-box{
        .fx-block-margin-box{
          height: 30px;
        }
        .fx-block-li{
          width:28px;
          height:28px;
          margin:0 2px;
          line-height: 28px;
        }
      }
    }
  }
}
.fx-pagination-disabled{
  .fx-pagination-inlinebox{
    
    .fx-pagination-pagebox{
      cursor: no-drop;
      .fx-text-box{
        color:#808080
      }
      .to-next-page-box{

        span{
          
        }
        span.input-span{
         
        }
      }
      .fx-prev-text{
        color:#808080;
        cursor: no-drop;
        background: #f5f5f5;
        &:hover{
          border-color:v-bind('colors.borderColor');
          color:v-bind('colors.color');
          background: #f5f5f5
        }
      }
      .fx-prev-text-text{
        color:#808080;
        cursor: no-drop;
        &:hover{
          color:#808080;
        }
      }
      .fx-next-text-text{
        color:#808080;
        cursor: no-drop;
        &:hover{
          color:#808080
        }
      }
      .fx-next-text{
        color:#808080;
        cursor: no-drop;
        background: #f5f5f5;
        &:hover{
          border-color:v-bind('colors.borderColor');
          color:v-bind('colors.color');
          background: #f5f5f5
        }
      }
      .fx-block-box{
        .fx-block-margin-box{
          
        }
        .fx-block-li{
          color:#808080;
          cursor: no-drop;
          background: #f5f5f5;
          &:hover{
            color:#808080;
            border-color:v-bind('colors.borderColor');
            background: #f5f5f5;
          }
        }
        .fx-block-li-active{
          border-color:v-bind('colors.borderColor');
          color:#808080;
          background: #f5f5f5
        }
      }
    }
  }
}
</style>
