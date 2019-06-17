import mysql from 'mysql'
import dbConfig from './db'
import sqlMap from './sqlMap'

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true
})
const insertValue = function (req, res, next) {
  pool.getConnection((_err, connection) => {
    const sql = sqlMap.insertValue
    connection.query(sql, (_err, result) => {
      console.log(result)
      res.json(result)
      connection.release()
    })
  })
}
const getValue = function (req, res, next) {
  const {id} = req.query
  pool.getConnection((_err, connection) => {
    const sql = sqlMap.getValue
    connection.query(sql, [id], (_err, result) => {
      console.log(result)
      connection.release()
    })
  })
}
const updateValue = function (req, res, next) {
  const {id, name} = req.body
  pool.getConnection((_err, connection) => {
    const sql = mysql.updateValue
    connection.query(sql, [name, id], (_err, result) => {
      console.log(result)
      connection.release()
    })
  })
}
const delValue = function (req, res, next) {
  const {id} = req.body
  pool.getConnection((_err, connection) => {
    const sql = sqlMap.delValue
    connection.query(sql, [id], (_err, result) => {
      console.log(result)
      connection.release()
    })
  })
}

export default { insertValue, getValue, updateValue, delValue }
