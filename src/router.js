import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store'
import MHistory from './utils/history.js'

Vue.use(Router)
Vue.use(MHistory)

Router.prototype.goBack = function () {
  this.isBack = true;
  this.back();
}

let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Cart.vue')
    }
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.auth) { // 查看路由是否需要登录
    // 需要认证，则检查令牌
    if (store.state.token) { // 已登录
      next();
    } else {// 去登陆      
      next({
        path: '/login',
        query: {redirect: to.path}
      })
    }
  } else {
    next();
  }
})

router.afterEach( (to, form) => {
  if (router.isBack) {
    MHistory.pop();
    router.isBack = false;
    router.transitionName = 'route-back'
  } else {
    MHistory.push(to.path)
    router.transitionName = 'route-forward'
  }
} )
export default router