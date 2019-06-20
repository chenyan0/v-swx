import axios from 'axios'
export function loginByUsernameApi (data) {
  return axios.post('http://localhost:3000/user/login', data)
}
export function logoutApi () {
  return axios.post('http://localhost:3000/user/logout')
}
export function updateUserInfoApi (data) {
  return axios.post('http://localhost:3000/user/updateUserInfo', data)
}
export function registerApi (data) {
  return axios.post('http://localhost:3000/user/register', data)
}
export function uploadApi (data) {
  return axios.post('http://localhost:3000/user/upload', data, {headers: {'Content-Type': false, 'Process-Data': false}})
}
