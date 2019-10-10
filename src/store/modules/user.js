import * as types from '../constants/types'
import {loginByUsernameApi, logoutApi, updateUserInfoApi, updateUserPassApi, followBloggerApi} from '@/api/login'

const user = {
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    // 用户登录状态
    loginStatus: !!localStorage.getItem('token'),
    // 用户登录信息
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
  },
  actions: {
    LoginByUsername ({commit}, res) {
      return new Promise((resolve, reject) => {
        loginByUsernameApi(res).then(res => {
          console.log(res)
          if (res.status === 200) {
            if (res.data.code) {
              const { token, id } = res.data.data
              localStorage.setItem('token', token)
              localStorage.setItem('id', id)
              commit(types.SET_TOKEN, token)
              commit(types.SET_LOGIN_STATUS, true)
              commit(types.SET_USER_INFO, res.data.data)
            } else {
              commit(types.SET_USER_INFO, res.data.data)
            }
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logoutApi(state.token).then((res) => {
          localStorage.removeItem('token')
          localStorage.removeItem('id')
          commit(types.SET_TOKEN, '')
          resolve(res)
        })
      })
    },
    setUserInfo ({ commit }, res) {
      sessionStorage.setItem('userInfo', JSON.stringify(res))
      commit(types.SET_USER_INFO, res)
    },
    updateUserInfo ({ commit }, res) {
      return new Promise((resolve, reject) => {
        updateUserInfoApi(res).then(data => {
          sessionStorage.setItem('userInfo', JSON.stringify(res))
          commit(types.UPDATE_USER_INFO, res)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    updateUserPass ({commit}, res) {
      return new Promise((resolve, reject) => {
        updateUserPassApi(res).then(data => {
          resolve(data)
        }).catch((err) => {
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
    },
    followTopic ({ commit }, res) {
      return new Promise((resolve, reject) => {
        followBloggerApi(res).then((data) => {
          console.log(data)
          commit(types.SET_FOLLOWTOPIC_STATUS, true)
          resolve(data)
        }).catch(() => {

        })
      })
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
    },
    [types.SET_FOLLOWTOPIC_STATUS] (state, res) {
      state.followTopicStatus = res
    }
  }
}

export default user
