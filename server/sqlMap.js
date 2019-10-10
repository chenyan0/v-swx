const sqlMap = {
  addUser: 'INSERT INTO users(id,fullname,password,email,mobile,avator) VALUES (?,?,?,?,?,?)',
  getUserByName: 'SELECT * FROM users WHERE fullname = ?',
  updateUserBaseInfo: 'UPDATE users SET fullname = ?,email = ?, mobile = ?,avator = ? WHERE id = ?',
  delValue: 'DELETE FROM users WHERE id = ?',
  getUserinfoById: 'SELECT * FROM users WHERE id = ?',
  updateUserPass: 'update users SET password = ? WHERE id = ?',
  getTopicList: 'SELECT * FROM topics',
  getCateDetailList: 'SELECT * FROM articles WHERE cate_id= ?',
  searchPost: 'SELECT * FROM articles WHERE art_title like "%"?"%"',
  getArticles: 'SELECT * FROM articles LIMIT 5 OFFSET 0',
  getRecommendBlogger: `SELECT authors.*,articles.art_id, articles.art_title
                        FROM authors
                        INNER JOIN(select articles.* 
                        from articles
                        GROUP BY articles.author_id) articles
                        ON authors.author_id = articles.author_id
                        ORDER BY articles.art_id`
}
module.exports = sqlMap
