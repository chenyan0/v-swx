import * as types from '../constants/types'
import {loginByUsernameApi, logoutApi, updateUserInfoApi} from '@/api/login'

const user = {
  state: {
    token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
    // 用户登录状态
    loginStatus: false,
    // 用户登录信息
    userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
  },
  actions: {
    LoginByUsername ({commit}, res) {
      return new Promise((resolve, reject) => {
        loginByUsernameApi(res).then(res => {
          console.log(res)
          const { token } = res.data
          sessionStorage.setItem('token', token)
          commit(types.SET_TOKEN, token)
          commit(types.SET_LOGIN_STATUS, true)
          commit(types.SET_USER_INFO, res.data)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logoutApi(state.token).then(() => {
          commit(types.SET_TOKEN, '')
          resolve()
        })
      })
    },
    FedLogOut ({commit}) {
      return new Promise(resolve => {
        commit(types.SET_TOKEN, '')
        resolve()
      })
    },
    /**
       * 用户登录
       */
    setUserInfo ({ commit }, res) {
      sessionStorage.setItem('userInfo', JSON.stringify(res))
      commit(types.SET_USER_INFO, res)
    },

    updateUserInfo ({ commit }, res) {
      return new Promise((resolve, reject) => {
        updateUserInfoApi(res).then(data => {
          console.log(res)
          sessionStorage.setItem('userInfo', JSON.stringify(res))
          commit(types.UPDATE_USER_INFO, res)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
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
    }

  },
  mutations: {
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
      state.userInfo = info
    }
  }
}

export default user
