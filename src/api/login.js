import axios from 'axios'
export function loginByUsernameApi (data) {
  return axios.post('http://localhost:3000/user/login', data)
}
export function logoutApi () {
  return axios.post('http://localhost:3000/user/logout')
}
export function getUserInfoApi (id) {
  return axios.post('http://localhost:3000/user/getUserInfo', id)
}
export function updateUserInfoApi (data) {
  return axios.post('http://localhost:3000/user/updateUserInfo', data)
}
export function registerApi (data) {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post('http://localhost:3000/user/register', data, headerConfig)
}
export function uploadApi (data) {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post('http://localhost:3000/user/upload', data, headerConfig)
}
