// 使用 Mock
var Mock = require('mockjs')
// 使用mockjs模拟数据
export default Mock.mock({
  'tasks|1-10': [{
    'code': 0,
    'data': {
      'fullName': '@CNAME', // 随机生成中文人名
      'userId': 1000234234001,
      'username': 'zhangsan'
    },
    'msg': 'success'
  }]
})
