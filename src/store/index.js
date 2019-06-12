import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import Com from './modules/com'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    Com
  },
  getters
})
