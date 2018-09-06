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
export const requestHotProduct = params => { // 热销产品请求
  return axios.get(`${base}/hotproduct`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
export const requestTree = params => { // 树结构请求
  return axios.get(`${base}/getTree`, params).then(res => {
    return res
  }, err => {
    console.log(err)
  }).catch((error) => {
    console.log(error)
  })
}
