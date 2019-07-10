import axios from 'axios'
import utils from '@/utils/config'
export const loginByUsernameApi = data => {
  return axios.post(utils.BASEURL + 'user/login', data)
}
export const logoutApi = () => {
  return axios.post(utils.BASEURL + 'user/logout')
}
export const getUserInfoApi = id => {
  return axios.post(utils.BASEURL + 'user/getUserInfo', id)
}
export const updateUserInfoApi = data => {
  return axios.post(utils.BASEURL + 'user/updateUserInfo', data)
}
export const updateUserPassApi = data => {
  return axios.post(utils.BASEURL + 'user/updateUserPass', data)
}
export const registerApi = data => {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post(utils.BASEURL + 'user/register', data, headerConfig)
}
export const uploadApi = data => {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post(utils.BASEURL + 'user/upload', data, headerConfig)
}

export const getListApi = data => {
  return axios.get(utils.BASEURL + 'post', data)
}
export const getCategoryListApi = data => {
  return axios.post(utils.BASEURL + 'post/categories', data)
}
export const getHotListApi = data => {
  return axios.post(utils.BASEURL + 'post/hot', data)
}
export const getPostDetailApi = data => {
  return axios.post(utils.BASEURL + 'post/detail', data)
}
