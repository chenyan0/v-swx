var express = require('express')
var Mock = require('mockjs')
var DATA = require('../mock')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    code: 0,
    data: Array.from({length: 10}).map(a => Mock.mock(DATA.post))
  })
})
router.post('/categories', function (req, res, next) {
  res.json({
    status: 200,
    data: Array.from({length: 10}).map(a => Mock.mock(DATA.categories))
  })
})
router.post('/hot', function (req, res, next) {
  res.json({
    code: 0,
    data: Array.from({length: 10}).map(a => Mock.mock(DATA.post))
  })
})
router.post('/detail', function (req, res, next) {
  res.json({
    code: 0,
    data: Mock.mock(DATA.articleDetail)
  })
})
router.post('/comment', function (req, res, next) {
  res.json({
    code: 0,
    status: 1,
    message: '发表成功'
  })
})
module.exports = router
