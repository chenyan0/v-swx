// import axios from 'axios'
import axios from '@/api/request'
// import utils from '@/utils/config'
export const loginByUsernameApi = data => {
  return axios.post('user/login', data)
}
export const logoutApi = () => {
  return axios.post('user/logout')
}
export const getUserInfoApi = id => {
  return axios.post('user/getUserInfo', id)
}
export const updateUserInfoApi = data => {
  return axios.post('user/updateUserInfo', data)
}
export const updateUserPassApi = data => {
  return axios.post('user/updateUserPass', data)
}
export const registerApi = data => {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post('user/register', data, headerConfig)
}
export const uploadApi = data => {
  const headerConfig = {headers: { 'Content-Type': 'multipart/form-data' }}
  return axios.post('user/upload', data, headerConfig)
}
export const getListApi = data => {
  return axios.get('post', data)
}
export const getCateDetailListApi = data => {
  return axios.post('post/cate/detail', data)
}
export const getCategoryListApi = data => {
  return axios.post('post/categories', data)
}
export const getHotListApi = data => {
  return axios.post('post/hot', data)
}
export const getPostDetailApi = data => {
  return axios.post('post/detail', data)
}
export const getRecommendApi = data => {
  return axios.post('post/recommendBlogger', data)
}
export const followBloggerApi = data => {
  return axios.post('post/followBlogger', data)
}
export const searchApi = data => {
  return axios.post('post/search', data)
}
