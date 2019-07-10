const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')
const uuid = require('node-uuid')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  multipleStatements: true
})
let query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return resolve(err)
      } else {
        connection.query(sql, val, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
// 添加用户
const addUser = async (value, res) => {
  const uid = uuid.v1().replace(/-/g, '')
  const { fullname, password, path, email, mobile } = value
  const v = await query(sqlMap.getUserByName, fullname)
  if (v.length !== 0) {
    res.json({ message: '用户已存在', code: 0 })
  } else {
    await query(sqlMap.addUser, [uid, fullname, md5(password), email, mobile, path])
    res.json({ message: '注册成功', code: 1 })
  }
}
// 用户登录
const loginUser = async (value, res) => {
  const { fullname, password } = value
  const v = await query(sqlMap.getUserByName, fullname)
  if (!v.length) {
    res.json({ message: '用户不存在', code: 0 })
  } else {
    const content = { name: fullname } // 要生成token的主题信息
    const secretOrPrivateKey = 'jwt' // 这是加密的key（密钥）
    const token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1 // 1小时过期
    })
    v[0].token = token // token写入数据库
    if (v[0].password !== md5(password)) {
      res.json({ code: 0, message: '用户账号信息不匹配' })
    } else {
      res.json({ code: 1, message: '登陆成功', data: { token: token, fullname: fullname, id: v[0].id } })
    }
  }
}
// 获取用户ID
const getUserById = async (value, res) => {
  const { id } = value
  const v = await query(sqlMap.getUserinfoById, id)
  if (v.length) {
    res.json(v[0])
  }
}
// 修改用户密码
const updateUserPass = async (value, res) => {
  const { oldPass, newPass, id } = value
  const v = await query(sqlMap.getUserinfoById, id)
  if (v[0].password !== md5(oldPass)) {
    res.json({ code: 0, message: '原密码不正确' })
  } else {
    await query(sqlMap.updateUserPass, [md5(newPass), id])
    res.json({ message: '密码修改成功' })
  }
}
//  修改用户基础信息
const updateUserBaseInfo = async (value, res) => {
  const { fullname, email, mobile, path, id } = value
  console.log(fullname, email, mobile, path, id)
  await query(sqlMap.updateUserBaseInfo, [fullname, email, mobile, path, id])
  res.json({ code: 1, message: '修改成功' })
}
module.exports = {
  addUser,
  loginUser,
  getUserById,
  updateUserPass,
  updateUserBaseInfo,
  delValue: function (req, res, next) {
    const { id } = req.body
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.delValue
      connection.query(sql, [id], (_err, result) => {
        connection.release()
      })
    })
  }
}
