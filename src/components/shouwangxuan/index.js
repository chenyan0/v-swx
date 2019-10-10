import Home from './home'
import Login from './user/login'
import Register from './user/register'
import ForgetPassword from './user/forgetPassword'
import Header from '../template/header'
import List from './list/list'
import Hot from './hot/hot'
import Detail from './detail/detail'
import ModifyUserInfo from './mine/modifyUserInfo'
import ModifyPass from './mine/modifyPass'
import SearchResult from './index/searchResult'
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登陆',
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
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: ForgetPassword,
    meta: {
      title: '找回密码',
      index: 1
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      header: Header,
      default: Home
    },
    meta: {
      title: '言轩',
      index: 2,
      keepAlive: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchResult,
    meta: {
      title: '搜索结果'
    }
  },
  {
    path: '/list/:id',
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
  },
  {
    path: '/modifyUserInfo',
    name: 'modifyUserInfo',
    component: ModifyUserInfo,
    meta: {
      title: '修改个人资料'
    }
  },
  {
    path: '/modifyPass',
    name: 'modifyPass',
    component: ModifyPass,
    meta: {
      title: '修改密码'
    }
  }
]
