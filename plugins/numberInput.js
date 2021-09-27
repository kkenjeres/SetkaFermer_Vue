import Vue from 'vue'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import vSelect from 'vue-select'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueMask from 'v-mask'

Vue.component('vue-number-input', VueNumberInput)
Vue.component('v-select', vSelect)
Vue.use(vueSmoothScroll)
Vue.use(VueMask)
