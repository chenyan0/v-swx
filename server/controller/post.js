var express = require('express')
var Mock = require('mockjs')
var DATA = require('../mock')
var router = express.Router()
const API = require('../api')

/* GET users listing. */
router.get('/', function (req, res, next) {
  API.getArticles(res)
})
router.post('/cate/detail', function (req, res, next) {
  API.getCateDetailList(req.body, res)
})
router.post('/categories', function (req, res, next) {
  API.getTopicList(res)
})
router.post('/hot', function (req, res, next) {
  API.getHotArticles(req.body, res)
})
router.post('/recommendBlogger', function (req, res, next) {
  API.getRecommendBlogger(res)
})
router.post('/followBlogger', function (req, res, next) {
  API.followBlogger(req.body)
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
router.post('/search', function (req, res, next) {
  API.searchPost(req.body, res)
})

module.exports = router
