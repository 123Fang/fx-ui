import { createApp } from 'vue'
import App from './App.vue'
import fButton from '../packages/button/index'
import fInput from '../packages/input/index'
import fSelect from '../packages/select/index'
import fTable from '../packages/table/index'
import fDropDown from '../test/dropDown/index'
import fCheckbox from '../packages/checkbox/index'
import fModal from '../packages/modal/index'
import fRadio from '../packages/radio/index'
import fSwitch from '../packages/switch/index'
import fDrawer from '../packages/drawer/index'





const app = createApp(App)
app.use(fButton).use(fInput).use(fSelect).use(fTable).use(fDropDown).use(fCheckbox).use(fModal).use(fRadio).use(fSwitch).use(fDrawer)
// app.use(fxInput)
app.mount('#app')
