/*
 * @Description: 路由跳转控制中心
 * @Author: 任录
 * @Date: 2019-07-22 15:13:52
 * @LastEditTime: 2020-10-16 15:26:58
*/

import Vue from 'vue'
import Router from 'vue-router'

import contactRoutes from './contact'
import aboutRoutes from './about'
import homeRoutes from './home'
import businessRoutes from './business'
import productRoutes from './product'

Vue.use(Router)

const children = [...contactRoutes, ...aboutRoutes, ...homeRoutes, ...productRoutes, ...businessRoutes]

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/Main'], resolve),
      children
    }
  ]
})

router.beforeEach((to, from, next) => {
    window.scroll(0,0);
    next();
})

export default router