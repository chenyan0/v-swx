import Vue from 'vue'
import Mint from 'mint-ui'
import Router from 'vue-router'
import Custom from '@/components/custom'
import OnlinePlan from '@/components/onlinePlan'
import JiaYing from '@/components/plan/jiaying/index'
import SalaryQuery from '@/components/salaryQuery'
import Result from '@/components/plan/jiaying/result'

Vue.use(Mint)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/custom',
      name: 'Custom',
      component: Custom,
      meta: {
        title: '自定义'
      }
    },
    {
      path: '/',
      name: 'OnlinePlan',
      component: OnlinePlan,
      meta: {
        title: '在线计划书'
      }
    }, {
      path: '/jiaying',
      name: 'JiaYing',
      component: JiaYing,
      meta: {
        title: '尊享家盈二号'
      }
    },
    {
      path: '/salaryQuery',
      name: 'SalaryQuery',
      component: SalaryQuery,
      meta: {
        title: '薪资查询'
      }
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      meta: {
        title: '利益演算结果'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
