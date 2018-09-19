import Vue from 'vue'
import Mint from 'mint-ui'
import Router from 'vue-router'
import Custom from '@/components/custom'
import Navigation from '@/components/navigation'
import Login from '@/components/login'

import planRouter from '@/components/plan/index'
import queryRouter from '@/components/query/index'
Vue.use(Mint)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
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
      path: '/navigation',
      name: 'navigation',
      component: Navigation,
      meta: {
        title: '导航'
      }
    },
    ...queryRouter,
    ...planRouter
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
