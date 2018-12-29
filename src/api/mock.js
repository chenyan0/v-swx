// 使用 Mock
const Mock = require('mockjs')
const Random = Mock.Random
// 使用mockjs模拟数据

const post = {
  'id|+1': 1,
  'date': () => Random.date('yyyy-mm-dd'),
  'status': 'publish',
  'post_title': () => Random.ctitle(),
  'post_thumbnail_image': () => Random.image('100x75'),
  'total_comments|1-100': 1,
  'category_name': () => Random.ctitle(),
  'post_date': () => Random.date('yyyy-mm-dd'),
  'like_count|0-200': 1,
  'pageviews|0-10000': 0
}
const categories = {
  'id|+1': 1,
  'count': 150,
  'description': () => Random.ctitle(),
  'link': 'https://www.watch-life.net/category/life-thinking',
  'name': '@cword(5, 7)',
  'slug': 'life-thinking',
  'taxonomy': 'category',
  'parent': 0,
  'meta': [],
  'post_date': () => Random.date('yyyy-mm-dd'),
  'category_thumbnail_image': () => Random.image('100x75')
}
const articleDetail = {
  'id': () => Random.integer(20, 100),
  'date': () => Random.date('yyyy-mm-dd'),
  'status': () => 'publish',
  'post_title': () => Random.ctitle(),
  'post_thumbnail_image': () => Random.image('100x75'),
  'post_content': Random.cparagraph(3, 10),
  'post_date': () => Random.date('yyyy-mm-dd'),
  'total_comments': () => Random.integer(20, 100),
  'category_name': () => Random.ctitle(),
  'like_count': () => Random.integer(20, 100),
  'pageviews': () => Random.integer(20, 100),
  'prev_page': {
    'id': () => Random.integer(20, 100),
    'title': () => Random.ctitle()
  },
  'next_page': {
    'id': () => Random.integer(20, 100),
    'title': () => Random.ctitle()
  },
  'comments_info|3-5': [{
    'comments_thumb': () => Random.image('40x40'),
    'comments_date': () => Random.date('yyyy-mm-dd'),
    'comments_username': () => Random.name(),
    'comments_text': () => Random.cparagraph(1, 5)
  }],
  'praise|1-10': [{
    'praise_user_thumb': () => Random.image('40x40')
  }]

}

export {post, categories, articleDetail}
