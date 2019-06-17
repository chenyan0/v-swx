const sqlMap = {
  insertValue: 'INSERT INTO test(id,name,pass) VALUES (1,"user","123456")',
  getValue: 'SELECT * FROM test WHERE id = ?',
  updateValue: 'UPDATE test SET name = ? WHERE id = ?',
  delValue: 'DELETE FROM test WHERE id = ?'
}
export default sqlMap
