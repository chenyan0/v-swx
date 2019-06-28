const sqlMap = {
  insertValue: 'INSERT INTO test(id,fullname,password,email,mobile,avator) VALUES (?,?,?,?,?,?)',
  getValue: 'SELECT * FROM test WHERE fullname = ?',
  updateValue: 'UPDATE test SET fullname = ? WHERE id = ?',
  delValue: 'DELETE FROM test WHERE id = ?',
  getUserInfo: 'SELECT * FROM test WHERE id = ?'
}
module.exports = sqlMap
