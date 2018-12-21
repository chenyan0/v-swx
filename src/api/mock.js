// 使用 Mock
const Mock = require('mockjs')
// const Random = Mock.Random
// 使用mockjs模拟数据
const mock = Mock.mock({
  'hotpost|2-10': [
    {
      'id|+1': 1,
      'total_comments|1-100': 1,
      'like_count|0-200': 1,
      'pageviews|0-100000': 0,
      'post_date': "@date('yyyy-mm-dd')",
      'post_thumbnail_image': "@Image('100x75')",
      'post_title': '@ctitle()'
    }
  ],
  'post|10': [
    {
      'id|+1': 1,
      'date': "@date('yyyy-mm-dd')",
      'status': 'publish',
      'post_title': '@ctitle()',
      'post_thumbnail_image': "@Image('100x75')",
      'total_comments|1-100': 1,
      'category_name': '@ctitle()',
      'post_date': "@date('yyyy-mm-dd')",
      'like_count|0-200': 1,
      'pageviews|0-100000': 0
    }
  ],
  'categories|10': [
    {
      'id|+1': 1,
      'count': 150,
      'description': '@ctitle()',
      'link': 'https://www.watch-life.net/category/life-thinking',
      'name': '@cword(5, 7)',
      'slug': 'life-thinking',
      'taxonomy': 'category',
      'parent': 0,
      'meta': [],
      'post_date': "@date('yyyy-mm-dd')",
      'category_thumbnail_image': "@Image('100x75')"
    }
  ],
  'articleDetail': {
    'id|+1': 1,
    'date': "@date('yyyy-mm-dd')",
    'status': 'publish',
    'post_title': '@ctitle()',
    'post_thumbnail_image': "@Image('100x75')",
    'total_comments|1-100': 1,
    'category_name': '@ctitle()',
    'post_date': "@date('yyyy-mm-dd')",
    'like_count|0-200': 1,
    'pageviews|0-100000': 0
  }
})
export default mock
