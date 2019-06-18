const API = require('../api')
const express = require('express')
const router = express.Router()
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
router.post('/register', (req, res) => {
  API.insertValue(req, res)
})
module.exports = router
