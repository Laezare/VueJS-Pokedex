import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import routes from './routes'

var PulseLoader = require('vue-spinner/src/PulseLoader.vue');

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'))

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  router,
  render: h => h(App),
  'PulseLoader': PulseLoader
}).$mount('#app')
