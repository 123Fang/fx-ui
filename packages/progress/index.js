
import fProgress from './index.vue'

fProgress.install = app => {
  app.component(fProgress.name, fProgress)
} 

export default fProgress
