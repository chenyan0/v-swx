import axios from 'axios'
import router from 'vue-router'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000/' // 域名配置
axios.defaults.headers.common['Authentication-Token'] = localStorage.getItem('token') // 请求头
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 判断是否存在token，如果存在将每个页面header都添加token
  if (localStorage.getItem('token')) {
    config.headers.common['Authentication-Token'] = localStorage.getItem('token')
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, error => {
  // 获取状态码
  const {status} = error.response
  if (status === 401) {
    console.error('token失效,请重新登录')
    // 清除token
    localStorage.removeItem('token')
    // 重新登录
    router.push('/login')
  }

  return Promise.reject(error)
})

export default axios
