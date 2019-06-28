import Vue from 'vue'
import Router from 'vue-router'
import planRouter from '@/components/plan/index'
import queryRouter from '@/components/query/index'
import swxRouter from '@/components/shouwangxuan/index'
Vue.use(Router)
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
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
    if (to.path === '/login') {
      next()
    } else {
      let token = localStorage.getItem('token')
      if (token === 'null' || token === '') {
        next({
          path: '/login',
          query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
  next()
})

export default router
