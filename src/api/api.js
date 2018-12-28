import Mock from 'mockjs'
import mock from './mock'
import data from '../../static/json/data.json'
const base = 'http://localhost:8000/api'
Mock.setup({
  // timeout: 2000 方式一 直接设置值
  timeout: '1000 - 3000' // 方式二 设置区间 注意这个是一个字符串形式
})
// 专题接口
Mock.mock(`${base}/hotproduct`, 'get', {
  code: 0,
  data: data.hottj
})
Mock.mock(`${base}/getCalculus`, 'post', {
  code: 0,
  data: data.calculusResult
})
Mock.mock(`${base}/getFeedata`, 'post', {
  code: 0,
  data: data.feeData
})
Mock.mock(`${base}/getTree`, 'get', {
  code: 0,
  data: data.tree
})
Mock.mock(`${base}/salaryQuery`, 'post', {
  code: 0,
  data: data.sqData
})

Mock.mock(`${base}/customForm`, 'post', {
  code: 0,
  status: 1,
  message: '提交成功'
})
// =====================分割线=====================
Mock.mock(`${base}/login`, 'post', {
  code: 0,
  status: 1,
  message: '登录成功'
})
// 首页文章列表接口
Mock.mock(`${base}/post`, 'get', {
  code: 0,
  data: Array.from({ length: 10}).map(a => Mock.mock(mock.post))
})
// 专题接口
Mock.mock(`${base}/categories`, 'get', {
  code: 0,
  data: Array.from({ length: 10}).map(a => Mock.mock( mock.categories))
})
// 热门文章接口
Mock.mock(`${base}/hotpost`, 'post', (options) => {
  return {
    code: 0,
    data: Array.from({ length: 10}).map(a => Mock.mock(mock.post))
  }
})
// 文章详情
Mock.mock(RegExp(`${base}/article/detail`), 'post', (options) => {
  console.log(options)
  return {
    code: 0,
    data:Mock.mock(mock.articleDetail)
  }
})
// 发表评论
Mock.mock(`${base}/article/postComment`, 'post', (options) => {
  console.log(options)
  return {
    code: 0,
    status: 1,
    message: '发表成功'
  }
})
console.log(mock)
