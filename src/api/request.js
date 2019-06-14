import axios from 'axios'
import store from '../store/index'
import router from 'vue-router'

axios.defaults.headers.common['Authentication-Token'] = store.state.user.token
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.user.token) {
    config.headers.common['Authentication-Token'] = store.state.user.token
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
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
