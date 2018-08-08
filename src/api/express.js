var express = require('express')
var app = express()
app.get('/api', function (req, res) {
  res.send('Hello World')
})

app.get('/api/login', function (req, res) {
  console.log('/login 请求')
  res.send('用户列表页面')
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
