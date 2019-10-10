const API = require('../api')
const express = require('express')
const multer = require('multer')
const router = express.Router()
var datatime = 'upload'
var storage = multer.diskStorage({
  destination: datatime,
  filename (req, file, cb) {
    const fileFormat = (file.originalname).split('.') // 取后缀
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
var upload = multer({ storage: storage })

/* GET users listing. */
router.post('/login', async (req, res) => {
  API.loginUser(req.body, res)
})
router.post('/register', upload.single('avator'), async (req, res) => {
  req.body.path = req.file.path
  API.addUser(req.body, res)
})
router.post('/logout', function (req, res) {
  res.send('success')
})

router.post('/getUserInfo', function (req, res) {
  API.getUserById(req.body, res)
})
router.post('/updateUserPass', function (req, res) {
  API.updateUserPass(req.body, res)
})
router.post('/updateUserInfo', upload.single('avator'), async (req, res) => {
  req.body.path = req.file.path
  API.updateUserBaseInfo(req.body, res)
})
module.exports = router
