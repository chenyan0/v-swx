// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import store from './store/index'
import Vuex from 'vuex'
import toast from './components/common/toast/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
library.add(far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(toast)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(Vuelidate)
Vue.config.productionTip = false
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
