import * as types from '../constants/types'

const state = {
  thumbUp: JSON.parse(sessionStorage.getItem('thumbUp')) || false
}
const actions = {
  setUserThumb ({commit}, status) {
    sessionStorage.setItem('thumbUp', status)
    commit(types.SET_THUMB_STATUS, status)
  }
}
const getters = {
  thumbUp: state => state.thumbUp
}
const mutations = {
  [types.SET_THUMB_STATUS] (state, status) {
    state.thumbUp = status
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
