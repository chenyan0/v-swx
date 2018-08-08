import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Com from './modules/com'
import Custom from './modules/custom'
Vue.use(Vuex)

export default new Vuex.Store(
  {
    modules: {
      Login,
      Com,
      Custom

    }

  }
)
