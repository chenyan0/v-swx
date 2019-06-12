const getters = {
  loginStatus: state => state.user.loginStatus,
  userInfo: state => state.user.userInfo,
  token: state => state.user.token
}
export default getters
