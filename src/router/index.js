import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Custom from '@/components/custom'
import Navigation from '@/components/navigation'
import Login from '@/components/user/login'
import Register from '@/components/user/register'
import Header from '@/components/template/header'
import Setting from '@/components/setting'
import planRouter from '@/components/plan/index'
import queryRouter from '@/components/query/index'
import swxRouter from '@/components/shouwangxuan/index'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
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
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册',
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
        title: '我的组件库',
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
    ...planRouter,
    ...swxRouter
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.getters.token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
  next()
})

export default router
