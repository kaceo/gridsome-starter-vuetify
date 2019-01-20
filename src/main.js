//import './plugins/vuetify'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, head, isClient}) {
  Vue.use(Vuetify)
  Vue.component('Layout', DefaultLayout)
}