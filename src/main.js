// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store/index'
// Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
