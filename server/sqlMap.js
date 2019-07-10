const sqlMap = {
  addUser: 'INSERT INTO test(id,fullname,password,email,mobile,avator) VALUES (?,?,?,?,?,?)',
  getUserByName: 'SELECT * FROM test WHERE fullname = ?',
  updateUserBaseInfo: 'UPDATE test SET fullname = ?,email = ?, mobile = ?,avator = ? WHERE id = ?',
  delValue: 'DELETE FROM test WHERE id = ?',
  getUserinfoById: 'SELECT * FROM test WHERE id = ?',
  updateUserPass: 'update test SET password = ? WHERE id = ?'

}
module.exports = sqlMap
