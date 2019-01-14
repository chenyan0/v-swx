import List from './list/list'
import Hot from './hot/hot'
import Detail from './detail/detail'
export default [
  {
    path: '/list/:id',
    name: 'list',
    component: List,
    meta: {
      title: '查询结果',
      keepAlive: true
    }
  },
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
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      title: '详情'
    }
  }
]
