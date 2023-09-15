// 导入组件
// todo :: 用脚本完成
import fButton from './button/index';
import fInput from './input/index';
import fTable from './table/index';
import fSelect from './select/index'
import fDropdown from './dropDown/index'

const components = [fButton,fInput,fTable,fSelect,fDropdown]

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
  "version": "0.2.0",
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
	// 以下是具体的组件列表
  ...components

}
