import { createApp } from 'vue'
import App from './App.vue'
import fButton from '../packages/button/index'
import fInput from '../packages/input/index'
import fSelect from '../packages/select/index'
import fTable from '../packages/table/index'
import fDropDown from '../packages/dropDown/index'
import fCheckbox from '../packages/checkbox/index'



const app = createApp(App)
app.use(fButton).use(fInput).use(fSelect).use(fTable).use(fDropDown),use(fCheckbox)
// app.use(fxInput)
app.mount('#app')
