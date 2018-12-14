import List from './list/list'
import Hot from './hot/hot'
export default [
  {
    path: '/list',
    name: 'list',
    component: List,
    meta: {
      title: '查询结果'
    }
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot,
    meta: {
      title: '热门'
    }
  }
]
