import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import planRouter from '@/components/plan/index'
import queryRouter from '@/components/query/index'
import swxRouter from '@/components/shouwangxuan/index'
import myPluginRouter from '@/components/example/index'
Vue.use(Router)
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
    ...queryRouter,
    ...planRouter,
    ...swxRouter,
    ...myPluginRouter
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
