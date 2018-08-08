import axios from 'axios'

let base = 'http://localhost:8081/api'
// let base = ''

export const requestLogin = params => { // 用户登录请求
  return axios.post(`${base}/login`, params).then(res => {
    return res.data
  }, err => {
    reject(err)
  }).catch((error) => {
    reject(error)
  })
}
export const getUserList = params => { // 获取用户信息
  return axios.get(`${base}/userData`, { params: params }).then(res => {
    return res.data
  }, err => {
    reject(err)
  }).catch((error) => {
    reject(error)
  })
}
