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

</template>
<style scoped>
span{
  margin:0 10px 10px 0;
  display:inline-block
}
div{
  margin-bottom:10px;
}
</style>
