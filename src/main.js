import Vue from 'vue'
import App from './App.vue'

import VueFire from 'vuefire'
Vue.use(VueFire)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

import store from './store'
import router from './router'

import './firebase'
import './filters'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
