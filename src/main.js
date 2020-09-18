/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 10:04:44
 * @LastEditTime: 2020-09-18 18:38:07
 * @FilePath: /Website/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这里面文件导入顺序决定样式的覆盖
import Vue from 'vue'
import router from './router'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'

import animated from 'animate.css'
Vue.use(animated)

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
