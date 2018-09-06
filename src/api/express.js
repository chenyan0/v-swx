var express = require('express')
var app = express()
var data = require('../../static/json/data.json')
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.get('/api/hotproduct', function (req, res) {
  res.json(data.hottj)
})
app.get('/api/getTree', function (req, res) {
  res.json(data.tree)
})
app.post('/api/login', function (req, res) {
  if (req.params.username !== 'admin' && req.params.password !== '12345') {
    res.send('账号密码不匹配')
  } else {
    res.send('登录成功')
  }
})
app.listen(8000)
console.log('Listening on port 8000...')
