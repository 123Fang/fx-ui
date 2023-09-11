import { createApp } from 'vue'
import App from './App.vue'
import fxUI from '../packages/button/index'

const app = createApp(App)
app.use(fxUI)
app.mount('#app')
