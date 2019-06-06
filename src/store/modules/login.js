import * as types from '../constants/types'

const state = {
  token: 'sdasdsad',
  // 用户登录状态
  loginStatus: JSON.parse(sessionStorage.getItem('loginStatus')) || false,
  // 用户登录信息
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {}
}

const actions = {
  /**
     * 用户登录
     */
  setUserInfo ({ commit }, res) {
    sessionStorage.setItem('userInfo', JSON.stringify(res))
    commit(types.SET_USER_INFO, res)
  },

  /**
     * 退出登录
     */
  setSignOut ({ commit }) {
    sessionStorage.removeItem('loginStatus')
    sessionStorage.removeItem('userInfo')
    commit(types.SET_LOGIN_STATUS, false)
    commit(types.SET_USER_INFO, {})
  },
  /**
    *
    */
  setToken ({ commit }, res) {
    sessionStorage.setItem('token', res)
    sessionStorage.setItem('loginStatus', true)
    commit(types.SET_TOKEN, res)
    commit(types.SET_LOGIN_STATUS, true)
  },
  updateUserInfo ({commit}, res) {
    console.log(res)
    sessionStorage.setItem('userInfo', res)
    commit(types.UPDATE_USER_INFO, res)
  }
}

const getters = {
  loginStatus: state => state.loginStatus,
  userInfo: state => state.userInfo,
  token: state => state.token
}

const mutations = {
  [types.SET_USER_INFO] (state, res) {
    state.userInfo = res
  },
  [types.SET_LOGIN_STATUS] (state, status) {
    state.loginStatus = status
  },
  [types.SET_TOKEN] (state, res) {
    state.token = res
  },
  [types.UPDATE_USER_INFO] (state, info) {
    let data = Object.assign(state.userInfo, info)
    console.log(info, data)
    state.userInfo = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
