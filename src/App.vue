<template>
  <h4>基本类型</h4>
  <span><fx-button>默认按钮</fx-button></span>  
  <span><fx-button type="primary">主要按钮</fx-button></span> 
  <span><fx-button type="success">成功按钮</fx-button></span> 
  <span><fx-button type="danger">危险按钮</fx-button></span> 
  <span><fx-button type="warning">警告按钮</fx-button></span> 
  <span><fx-button type="dashed">虚线按钮</fx-button></span> 
  <span><fx-button type="text">文本按钮</fx-button></span>
  <h4>圆角类型</h4>
  <span><fx-button round>默认按钮</fx-button></span>  
  <span><fx-button type="primary" round>主要按钮</fx-button></span>
  <span><fx-button type="success" round>成功按钮</fx-button></span> 
  <span><fx-button type="danger" round>危险按钮</fx-button></span> 
  <span><fx-button type="warning" round>警告按钮</fx-button></span> 
  <span><fx-button type="dashed" round>虚线按钮</fx-button></span>
  <h4>禁用状态</h4>
  <span><fx-button disabled>默认按钮</fx-button></span>  
  <span><fx-button type="primary" disabled>主要按钮</fx-button></span>
  <span><fx-button type="success" disabled>成功按钮</fx-button></span> 
  <span><fx-button type="danger" round disabled>危险按钮</fx-button></span> 
  <span><fx-button type="warning" round disabled>警告按钮</fx-button></span> 
  <span><fx-button type="dashed" round disabled>虚线按钮</fx-button></span>
  <h4>不同大小</h4>
  <div>
    <span><fx-button>默认大小</fx-button></span>  
    <span><fx-button type="primary">默认大小</fx-button></span>
    <span><fx-button type="success" size="medium">中等大小</fx-button></span> 
    <span><fx-button type="danger" size="medium">中等大小</fx-button></span> 
    <span><fx-button type="warning" size="small">小型按钮</fx-button></span> 
    <span><fx-button type="dashed" size="mini">超小按钮</fx-button></span>
  </div>
  <div>
    <span><fx-button round>默认大小</fx-button></span>  
    <span><fx-button type="primary" round>默认大小</fx-button></span>
    <span><fx-button type="success" size="medium" round>中等大小</fx-button></span> 
    <span><fx-button type="danger" size="medium" round>中等大小</fx-button></span> 
    <span><fx-button type="warning" size="small" round>小型按钮</fx-button></span> 
    <span><fx-button type="dashed" size="mini" round>超小按钮</fx-button></span>
  </div>
  <h4>自定义颜色</h4>
  <span><fx-button>默认按钮不支持</fx-button></span>  
  <span><fx-button type="custom" customColor="#9935f5">自定义颜色</fx-button></span>
  <span><fx-button type="custom" customColor="#1ba7dd">自定义颜色</fx-button></span> 
  <span><fx-button type="custom" size="medium" round customColor="#d33cc7">自定义颜色</fx-button></span> 
  <span><fx-button type="custom" size="small" round disabled customColor="#e7411c">自定义颜色</fx-button></span>
  <h4>图标按钮</h4>
  <div>
    <span><fx-button leftIcon="fx-icon-complete">按钮</fx-button></span>  
    <span><fx-button type="primary" size="medium" leftIcon="fx-icon-add-circle">添加</fx-button></span>
    <span><fx-button type="success" size="small" disabled leftIcon="fx-icon-home">主页</fx-button></span> 
    <span><fx-button type="danger"  size="mini" disabled rightIcon="fx-icon-calendar">日历</fx-button></span> 
    <span><fx-button type="warning" round leftIcon="fx-icon-upload">上传</fx-button></span> 
    <span><fx-button type="dashed" round rightIcon="fx-icon-search">搜索</fx-button></span>
    <span><fx-button type="text" round leftIcon="fx-icon-ashbin" style="color:#ec3437">删除</fx-button></span>
  </div>
  <div>
    <span><fx-button leftIcon="fx-icon-electronics"></fx-button></span>  
    <span><fx-button type="primary" size="small" leftIcon="fx-icon-edit"></fx-button></span>
    <span><fx-button type="success" size="mini" disabled icon="fx-icon-add-circle"></fx-button></span> 
    <span><fx-button type="danger" round disabled leftIcon="fx-icon-home"></fx-button></span> 
    <span><fx-button type="warning" round leftIcon="fx-icon-calendar"></fx-button></span> 
    <span><fx-button type="dashed" round leftIcon="fx-icon-upload"></fx-button></span>
    <span><fx-button type="text" round leftIcon="fx-icon-ashbin" style="color:#ec3437"></fx-button></span>
  </div>
  <h4>加载状态</h4>
  <span><fx-button localing leftIcon="fx-icon-loading1">加载中</fx-button></span>  
  <span><fx-button type="primary" leftIcon="fx-icon-loading2" localing>加载中</fx-button></span>
  <span><fx-button type="success" disabled leftIcon="fx-icon-loading3" localing>加载中</fx-button></span> 
  <span><fx-button type="danger" round rightIcon="fx-icon-loading4" localing>加载中</fx-button></span> 
  <span><fx-button type="warning" round rightIcon="fx-icon-loading5" localing>加载中</fx-button></span> 
  <span><fx-button type="dashed" round disabled rightIcon="fx-icon-loading6" localing>加载中</fx-button></span>

  <h4>基本使用</h4>
  <span>
    <!-- autofocus -->
    <fx-input v-model="value1" @focus="focus" @blur="blur" placeholder="基本使用"></fx-input>
  </span>
  <h4>禁用状态</h4>
  <span>
    <fx-input v-model="value1" disabled  rightIcon="fx-icon-calendar" placeholder="禁用状态"></fx-input>
  </span>
  <h4>可清空</h4>
  <span>
    <fx-input v-model="value1" clearable @clear="clear" @input="input" @change="change"></fx-input>
  </span>
  <h4>带图标-左</h4>
  <span>
    <fx-input v-model="value1"  leftIcon="fx-icon-search"></fx-input>
  </span>
  <h4>带图标-右</h4>
  <span>
    <fx-input v-model="value1" rightIcon="fx-icon-calendar"></fx-input>
  </span>
  <h4>不同大小</h4>
  <span>
    <fx-input v-model="value1" leftIcon="fx-icon-search"></fx-input>
  </span>
  <span>
    <fx-input v-model="value1"  leftIcon="fx-icon-search" size="small"></fx-input>
  </span>
  <span>
    <fx-input v-model="value1" leftIcon="fx-icon-calendar" size="mini"  placeholder="小按钮"></fx-input>
  </span>
  <h4>不同大小</h4>
  <span>
    <fx-input v-model="value1" rightIcon="fx-icon-search"></fx-input>
  </span>
  <span>
    <fx-input v-model="value1" rightIcon="fx-icon-search" size="small"></fx-input>
  </span>
  <span>
    <fx-input v-model="value1" rightIcon="fx-icon-calendar" size="mini"></fx-input>
  </span>
  <h4>组合输入</h4>
  <span>
    <fx-input v-model="value1" clearable>
      <template #btn>
        <fx-button type="primary" leftIcon="fx-icon-search">搜索</fx-button>
      </template>
    </fx-input>
  </span>
  <h4>密码类型</h4>
  <span>
    <fx-input v-model="password" type="password" placeholder="请输入密码" showPassword></fx-input>
  </span>
  <h4>自定义Focus颜色</h4>
  <span>
    <fx-input v-model="value1" type="text" placeholder="自定义你喜欢的focus颜色" focusColor="red"></fx-input>
  </span>
  

  <h4>基本使用</h4>
  <span style="width:100%;margin-right:0;">
    <fx-table :options="options">
      <template #id="item">
        <div>{{item.scope.row.id}}</div>
      </template>
      <template #action>
        <fx-button type="text" leftIcon="fx-icon-edit" size="small">编辑</fx-button>
        <fx-button type="text" leftIcon="fx-icon-ashbin" style="color:#ec3437"  size="small">删除</fx-button>
      </template>
    </fx-table>
  </span>
	
	<h4>基本使用</h4>
	<span style="width:300px;margin-right:0;">
		<fx-select v-model="selVal" placeholder="请选择"></fx-select>
	</span>
	<span style="width:300px;margin-right:0;">
		<fx-select v-model="selVal" placeholder="请选择" size="small"></fx-select>
	</span>
	<span style="width:300px;margin-right:0;">
		<fx-select v-model="selVal" placeholder="请选择" size="mini"></fx-select>
	</span>

  <h4>基本使用1</h4>
	<span style="width:300px;margin-right:0;">
		<fx-dropdown
    title="下拉菜单"
    :options="dorpoptions"
    @change="dropchange"
  ></fx-dropdown>
	</span>


</template>
<script setup>
import { reactive, ref } from "vue";

const value1 = ref('')
const password = ref('')
const selVal = ref('')
const state = reactive({
  options:{
    fileds:[
      {
        field:'id',
        title:'ID',
        align:'center'
      },
      {
        field:'name',
        title:'姓名',
        align:'center'
      },
      {
        field:'job',
        title:'职业'
      },
      {
        field:'address',
        title:'地址'
      },
      {
        field:'from',
        title:'籍贯'
      },
      {
        field:'action',
        title:'操作',
        width:'200px',
        align:'center'
      }
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  }
})
const {options } = state
const focus = (e) =>{
  // console.log(e);
}
const blur = (e) =>{
  // console.log(e)
}
const input = (e) =>{
  console.log(e);
}
const change = (e) =>{
  console.log(e);
}
const clear = () =>{
  console.log("清空")
}

// dropdown
const dorpoptions = reactive([
    { label: "菜单1" },
    { label: "菜单2" },
    { label: "菜单3" },
    { label: "菜单4" },
    { label: "菜单5" },
  ],
);
const dropchange = (item, index) => {
  console.log(item, index);
};
</script>
<style scoped>
span{
  margin:0 10px 10px 0;
  display:inline-block
}
div{
  margin-bottom:10px;
}
</style>
