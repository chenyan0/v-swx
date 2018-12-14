
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var data = require('../../static/json/data.json')
var mock = require('./mock')
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json')
  next()
})

app.use(bodyParser.json({limit: '1mb'})) // body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ // 此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}))
app.get('/api/article', function (req, res) {
  res.json(mock.hotpost)
})
app.get('/api/post', function (req, res) {
  res.json(mock.post)
})
app.get('/api/categories', function (req, res) {
  res.json(mock.categories)
})
app.get('/api/hotproduct', function (req, res) {
  res.json(data.hottj)
})
app.post('/api/getCalculus', function (req, res) {
  res.json(data.calculusResult)
})
app.post('/api/getFeedata', function (req, res) {
  res.json(data.feeData)
})
app.get('/api/getTree', function (req, res) {
  res.json(data.tree)
})
app.post('/api/login', function (req, res) {
  res.send({status: 1, message: '登录成功'})
  // if (req.body.username === 'admin' && req.body.password === '123456') {
  //   res.send({status: 1, message: '登录成功'})
  // } else {
  //   res.send({status: 0, message: '账号或密码错误'})
  // }
})
app.post('/api/salaryQuery', function (req, res) {
  res.json(data.sqData)
})
app.post('/api/customForm', function (req, res) {
  res.send({status: 1, message: '提交成功'})
})
app.listen(8000)
