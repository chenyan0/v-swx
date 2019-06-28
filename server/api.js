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

module.exports = {
  insertValue: function (req, res) {
    const id = uuid.v1().replace(/\-/g, '')
    const { fullname, password, path, email, mobile } = req.body
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.insertValue
      if (_err) {
        console.log(_err)
      }
      connection.query(sql, [id, fullname, md5(password), email, mobile, path], (_err, result) => {
        if (_err) {
          console.log(_err)
        }
        if (result) {
          res.json({message: '注册成功', status: 1})
        }
        connection.release()
      })
    })
  },
  getValue: function (req, res) {
    const { fullname, password } = req.body
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.getValue
      if (_err) {
        console.log(_err)
      }
      connection.query(sql, fullname, (_err, result) => {
        if (_err) {
          console.log(_err)
        }
        if (result.length !== 0) {
          let content = {name: fullname} // 要生成token的主题信息
          let secretOrPrivateKey = 'jwt' // 这是加密的key（密钥）
          let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60 * 60 * 1 // 1小时过期
          })
          result[0].token = token // token写入数据库
          if (result[0].password !== md5(password)) {
            res.json({status: 0, message: '用户账号信息不匹配'})
            return false
          }
          res.json({status: 1, mesaage: '登陆成功', data: {token: token, fullname: fullname, id: result[0].id}})
        } else {
          res.json({status: 0, message: '用户不存在'})
        }
        connection.release()
      })
    })
  },
  updateValue: function (req, res, next) {
    const { id, name } = req.body
    pool.getConnection((_err, connection) => {
      const sql = mysql.updateValue
      connection.query(sql, [name, id], (_err, result) => {
        console.log(result)
        connection.release()
      })
    })
  },
  delValue: function (req, res, next) {
    const { id } = req.body
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.delValue
      connection.query(sql, [id], (_err, result) => {
        console.log(result)
        connection.release()
      })
    })
  },
  getUserInfo: function (req, res, next) {
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.getUserInfo
      if (_err) {
        console.log(_err)
      }
      connection.query(sql, req.body.id, (_err, result) => {
        console.log(req.body, result)
        res.json(result[0])
      })
    })
  }

}
