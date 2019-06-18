const sqlMap = {
  insertValue: 'INSERT INTO test(name,password) VALUES (?,?)',
  getValue: 'SELECT * FROM test WHERE id = ?',
  updateValue: 'UPDATE test SET name = ? WHERE id = ?',
  delValue: 'DELETE FROM test WHERE id = ?'
}
module.exports = sqlMap
