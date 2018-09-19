import OnlinePlan from './onlinePlan'
import Plan from './plan'
import Type from './type'
import jyIndex from './jiaying/index'
import jyResult from './jiaying/result'

export default [
  {
    path: '/onlineplan',
    name: 'onlineplan',
    component: OnlinePlan,
    meta: {
      title: '在线计划书'
    }
  },
  {
    path: '/type/:typeId',
    name: 'type',
    component: Type
  },
  {
    path: '/jiaying',
    name: 'jiaying',
    component: Plan,
    children: [{
      path: 'index',
      component: jyIndex,
      meta: {
        title: '尊享家盈二号'
      }
    },
    {
      path: 'result',
      component: jyResult,
      meta: {
        title: '利益演算结果'
      }
    }]
  }
]
