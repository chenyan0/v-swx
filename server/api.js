const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')
const uuid = require('node-uuid')
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
    console.log(req)
    const id = uuid.v1().replace(/\-/g, '')
    const query = [id].concat(req)
    console.log(query)
    pool.getConnection((_err, connection) => {
      const sql = sqlMap.insertValue
      if (_err) {
        console.log(_err)
      }
      connection.query(sql, query, (_err, result) => {
        if (_err) {
          console.log(_err)
        }
        if (result) {
          res.json({status: 1})
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
      connection.query(sql, [fullname], (_err, result) => {
        console.log(result[0])
        if (_err) {
          console.log(_err)
        }
        if (result[0] === undefined) {
          res.json({status: 0, message: '用户不存在'})
        } else {
          if (result[0].password !== password) {
            res.json({status: 0, message: '用户账号信息不匹配'})
          } else {
            res.json({status: 1, data: result[0]})
          }
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
  }
}
