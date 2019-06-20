const API = require('../api')
const express = require('express')
const fs = require('fs')
const formidable = require('formidable')
const router = express.Router()

/* GET users listing. */
router.post('/login', (req, res) => {
  API.getValue(req, res)
  // if (fullname === 'admin') {
  //   if (usermap[fullname].pass === password) {
  //     res.json(usermap['admin'])
  //   }
  // } else {
  //   usermap['user'].forEach(element => {
  //     if (element.fullname === fullname && element.pass === password) {
  //       res.json(element)
  //     }
  //   })
  // }
})
router.post('/logout', function (req, res) {
  res.send('success')
})
router.post('/updateUserInfo', function (req, res) {
  res.json({
    message: '修改成功'
  })
})
router.post('/upload', function (req, res) {
  let form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = '../upload'
  form.keepExtensions = true

  form.parse(req, function (err, field, files) {
    if (err) {
      console.log(err)
    }
    console.log(files)
  })
  res.json({
    message: 'upload file'
  })
  // form.encoding = 'utf-8'
  // form.uploadDir = '../upload'
  // form.keepExtensions = true// 保留后缀
  // form.maxFieldsSize = 2 * 1024 * 1024
  // // 处理图片
  // form.parse(req, function (err, fileds, files) { // 解析 formData数据
  //   if (err) { return console.log(err) }

  //   let imgPath = files.img.path // 获取文件路径
  //   let imgName = './test.' + files.img.type.split('/')[1] // 修改之后的名字
  //   let data = fs.readFileSync(imgPath) // 同步读取文件

  //   fs.writeFile(imgName, data, function (err) { // 存储文件
  //     if (err) { return console.log(err) }

  //     fs.unlink(imgPath, function () {}) // 删除文件
  //     res.json({code: 1})
  //   })
  // })
})
router.post('/register', (req, res) => {
  API.insertValue(req, res)
})
module.exports = router
