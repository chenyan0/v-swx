import Vue from 'vue'
import Mint from 'mint-ui'
import Router from 'vue-router'
import Custom from '@/components/custom'
import OnlinePlan from '@/components/plan/onlinePlan'
import JiaYing from '@/components/plan/jiaying/index'
import SalaryQuery from '@/components/salaryQuery'
import Login from '@/components/login'
import Result from '@/components/plan/jiaying/result'
import Type from '@/components/plan/type'

Vue.use(Mint)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom,
      meta: {
        title: '自定义'
      }
    },
    {
      path: '/',
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
    }, {
      path: '/jiaying',
      name: 'jiaying',
      component: JiaYing,
      meta: {
        title: '尊享家盈二号'
      }
    },
    {
      path: '/salaryQuery',
      name: 'salaryquery',
      component: SalaryQuery,
      meta: {
        title: '薪资查询'
      }
    },
    {
      path: '/result',
      name: 'result',
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
