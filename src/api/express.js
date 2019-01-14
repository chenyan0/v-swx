
// var Mock = require('../api/mock')
import Mock from 'mockjs'
import {categories} from './mock'
var express = require('express')

var app = express()
var bodyParser = require('body-parser')
var router = express.Router()
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
router.get('/getNewsList', function (req, res) {
  res.json({
    errno: 0,
    data: Array.from({length: 10}).map(a => Mock.mock(categories))
  })
})

app.use('/api', router) // 域名下的访问路径
app.listen(8000)
