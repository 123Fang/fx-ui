// 导入组件
// todo :: 用脚本完成
import FxButton from './button/index';

const components = [FxButton]
const install = function (Vue, opts = {
    }) {
    // 判断是否安装
    if (install.installed) return
  	// 遍历注册全局组件
    components.map((component) => {
      Vue.component(component.name, component)
    })
  if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue)
  }
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
	// 以下是具体的组件列表
  ...components

}
