import { createApp } from 'vue'
import App from './App.vue'
import fButton from '../packages/button/index'
import fInput from '../packages/input/index'
import fSelect from '../packages/select/index'
import ftable from '../packages/table/index'



// test
// import fxInput from '../test/input/index'
//


const app = createApp(App)
app.use(fButton).use(fInput).use(fSelect).use(ftable)
// app.use(fxInput)
app.mount('#app')
