const API = require('../api')
const express = require('express')
const multer = require('multer')
const formidable = require('formidable')
const router = express.Router()

/* GET users listing. */
router.post('/login', (req, res) => {
  API.getValue(req, res)
})
router.post('/logout', function (req, res) {
  res.send('success')
})
router.post('/updateUserInfo', function (req, res) {
  res.json({
    message: '修改成功'
  })
})
var datatime = 'server/upload'
var storage = multer.diskStorage({
  destination: datatime,
  filename (req, file, cb) {
    const fileFormat = (file.originalname).split('.') // 取后缀
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
var upload = multer({ storage: storage })
router.post('/upload', upload.single('avatar'), function (req, res) {
  let file = req.file
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)
  res.json({
    status: 1,
    url: file.path
  })
})
router.post('/register', upload.single('avator'), (req, res) => {
  const data = Object.values(req.body)
  const { path } = req.file
  data.push(path)
  API.insertValue(data, res)
})
module.exports = router
