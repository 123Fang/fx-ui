import { createApp } from 'vue'
import App from './App.vue'
import fxUI from "../packages/index";



const app = createApp(App)
app.use(fxUI)
// app.use(fxInput)
app.mount('#app')
