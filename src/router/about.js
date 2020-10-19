/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-27 11:32:44
 * @LastEditTime: 2020-10-15 09:57:53
 * @FilePath: /Website/src/router/about.js
 */

export default [
    {
        path: '/about',
        component: resolve => require(['@/views/about/index'], resolve),
        name: 'about',
        meta: {
            nav: '企业简介'
        }
    },
    {
        path: '/about_framework',
        component: resolve => require(['@/views/about/framework'], resolve),
        name: 'framework',
        meta: {
            nav: '组织架构'
        }
    },
    {
        path: '/about_history',
        component: resolve => require(['@/views/about/history'], resolve),
        name: 'history',
        meta: {
            nav: '发展历程'
        }
    },
    {
        path: '/about_culture',
        component: resolve => require(['@/views/about/culture'], resolve),
        name: 'culture',
        meta: {
            nav: '企业文化'
        }
    }
]
