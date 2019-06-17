// import Mock from 'mockjs'
// import {post, categories, articleDetail} from './mock'
// import data from '../../static/json/data.json'
// const base = 'http://localhost:8000/api'
// Mock.setup({
//   // timeout: 2000 方式一 直接设置值
//   timeout: '10-1000' // 方式二 设置区间 注意这个是一个字符串形式
// })
// // 专题接口
// Mock.mock(`${base}/hotproduct`, 'get', {
//   code: 0,
//   data: data.hottj
// })
// Mock.mock(`${base}/getCalculus`, 'post', {
//   code: 0,
//   data: data.calculusResult
// })
// Mock.mock(`${base}/getFeedata`, 'post', {
//   code: 0,
//   data: data.feeData
// })
// Mock.mock(`${base}/getTree`, 'get', {
//   code: 0,
//   data: data.tree
// })
// Mock.mock(`${base}/salaryQuery`, 'post', {
//   code: 0,
//   data: data.sqData
// })

// Mock.mock(`${base}/customForm`, 'post', {
//   code: 0,
//   status: 1,
//   message: '提交成功'
// })
// const usermap = {
//   admin: {
//     token: 'admin',
//     fullname: 'admin',
//     pass: '123456',
//     roles: ['admin'],
//     status: 1
//   },
//   user: [{
//     token: 'user',
//     fullname: 'user',
//     pass: '123456',
//     roles: ['/system', '/system/permit', '/system/permit/account']
//   }]
// }
// // =====================分割线=====================
// //  用户登录
// Mock.mock(`${base}/login`, 'post', (options) => {
//   const { fullname, password } = JSON.parse(options.body)
//   if (fullname === 'admin') {
//     if (usermap[fullname].pass === password) {
//       console.log(usermap['admin'])
//       return usermap['admin']
//     }
//   } else {
//     for (let elem of usermap['user'].values()) {
//       if (elem.fullname === fullname && elem.pass === password) {
//         return elem
//       }
//     }
//   }
// })
// Mock.mock(`${base}/logout`, 'post', () => 'success')
// Mock.mock(`${base}/updateUserInfo`, 'post', (options) => {
//   return {
//     message: '修改成功'
//   }
// })
// // 用户注册账户
// Mock.mock(`${base}/register`, 'post', (options) => {
//   const { fullname, password } = JSON.parse(options.body)
//   usermap['user'].push({
//     token: 'user',
//     introduction: '我是用户',
//     fullname: fullname,
//     pass: password,
//     roles: ['/system', '/system/permit', '/system/permit/account']
//   })
//   return {
//     code: 0,
//     status: 1,
//     message: '注册成功'
//   }
// })
// // 首页文章列表接口
// Mock.mock(`${base}/post`, 'get', {
//   code: 0,
//   data: Array.from({length: 10}).map(a => Mock.mock(post))
// })
// // 专题接口
// Mock.mock(`${base}/categories`, 'post', (options) => {
//   return {
//     status: 200,
//     data: Array.from({length: 10}).map(a => Mock.mock(categories))
//   }
// })
// // 热门文章接口
// Mock.mock(`${base}/hotpost`, 'post', (options) => {
//   return {
//     code: 0,
//     data: Array.from({length: 10}).map(a => Mock.mock(post))
//   }
// })
// // 文章详情
// Mock.mock(`${base}/article/detail`, 'post', (options) => {
//   return {
//     code: 0,
//     data: Mock.mock(articleDetail)
//   }
// })
// // 发表评论
// Mock.mock(`${base}/article/postComment`, 'post', (options) => {
//   console.log(options)
//   return {
//     code: 0,
//     status: 1,
//     message: '发表成功'
//   }
// })
