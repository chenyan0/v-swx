const sqlMap = {
  insertValue: 'INSERT INTO test(id,name,password,email,mobile) VALUES (?,?,?,?,?)',
  getValue: 'SELECT * FROM test WHERE name = ?',
  updateValue: 'UPDATE test SET name = ? WHERE id = ?',
  delValue: 'DELETE FROM test WHERE id = ?'
}
module.exports = sqlMap
