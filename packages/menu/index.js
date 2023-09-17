
import fMenu from './index.vue'

fMenu.install = app => {
  app.component(fMenu.name, fMenu)
} 
//
export default fMenu
