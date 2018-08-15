import axios from 'axios'

let base = 'http://localhost:8000/api'
// let base = ''

export const requestLogin = params => { // 用户登录请求
  return axios.post(`${base}/login`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
export const requestHotProduct = params => { // 用户登录请求
  return axios.get(`${base}/hotproduct`, params).then(res => {
    console.log(res)
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
