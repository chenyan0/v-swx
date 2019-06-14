var express = require('express')
var router = express.Router()
const usermap = {
  admin: {
    token: 'admin',
    fullname: 'admin',
    pass: '123456',
    roles: ['admin'],
    status: 1
  },
  user: [{
    token: 'user',
    fullname: 'user',
    pass: '123456',
    roles: ['/system', '/system/permit', '/system/permit/account']
  }]
}
/* GET users listing. */
router.post('/login', function (req, res, next) {
  console.log(req.body)
  const {fullname, password} = req.body
  console.log(fullname, password)

  if (fullname === 'admin') {
    if (usermap[fullname].pass === password) {
      res.json(usermap['admin'])
    }
  } else {
    usermap['user'].forEach(element => {
      if (element.fullname === fullname && element.pass === password) {
        res.json(element)
      }
    })
  }
})
router.post('/logout', function (req, res, next) {
  res.send('success')
})
router.post('/updateUserInfo', function (req, res, next) {
  res.json({
    message: '修改成功'
  })
})
router.post('/register', function (req, res, next) {
  const { fullname, password } = JSON.parse(req)
  usermap['user'].push({
    token: 'user',
    introduction: '我是用户',
    fullname: fullname,
    pass: password,
    roles: ['/system', '/system/permit', '/system/permit/account']
  })
  res.json({
    code: 0,
    status: 1,
    message: '注册成功'
  })
})
module.exports = router
