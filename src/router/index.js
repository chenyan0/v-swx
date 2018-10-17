import Vue from 'vue'
import Mint from 'mint-ui'
import Router from 'vue-router'
import Custom from '@/components/custom'
import Navigation from '@/components/navigation'
import Login from '@/components/login'
import Header from '@/components/header'
import Setting from '@/components/setting'

import planRouter from '@/components/plan/index'
import queryRouter from '@/components/query/index'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
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
        title: '登录',
        index: 1
      }
    },
    {
      path: '/navigation',
      name: 'navigation',
      components: {
        header: Header,
        default: Navigation
      },
      meta: {
        title: '导航',
        index: 2

      }
    },
    {
      path: '/custom',
      name: 'custom',
      components: {
        header: Header,
        default: Custom
      },
      meta: {
        title: '自定义',
        index: 3
      }
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        header: Header,
        default: Setting
      },
      meta: {
        title: '设置',
        index: 4
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
