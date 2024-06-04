import { createVNode, render } from 'vue'
//
import mConfirm from './index.vue'

const divNode = createVNode('div', { class: 'fx-confirm-container' })

render(divNode, typeof document !== 'undefined' ? document.body : '')

const container = divNode.el

window.addEventListener('keydown', () => {
  
})

const Confirm = ({ title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass }) => {
  
  if (typeof document !== 'undefined') {
    
    document.body.style="overflow:hidden"
  }
  
  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve()
      render(null, container)
      if(typeof document !== 'undefined'){
        document.body.style="overflow:initial"
      }
    }
    const cancelCallback = () => {
      reject()
      render(null, container)
      if(typeof document !== 'undefined'){
        document.body.style="overflow:initial"
      }
    }
    // 生成这个组件的组件vnode
    const VNode = createVNode(mConfirm, { title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass, confirmCallback, cancelCallback })
    //  根据这个组件vnode创建组件实例，并挂在到指定的容器中
    render(VNode, container)
  })
}
export default Confirm
