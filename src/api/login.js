import axios from 'axios'
export function loginByUsernameApi (data) {
  return axios.post('http://localhost:8000/api/login', data)
}
export function logoutApi () {
  return axios.post('http://localhost:8000/api/logout')
}
export function updateUserInfoApi (data) {
  return axios.post('http://localhost:8000/api/updateUserInfo', data)
}
