import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MHeader from './components/MHeader'
// import {createAPI} from 'cube-ui'
// import MToast from './components/MToast'
import toast from './service/MToast'


Vue.component('MHeader', MHeader)

// createAPI(Vue, MToast, true)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$toast = toast;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')