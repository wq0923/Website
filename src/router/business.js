/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-10-15 14:07:05
 * @FilePath: /Website/src/router/business.js
 */


export default [
    {
        path: '/business',
        component: resolve => require(['@/views/business'], resolve),
        name: 'business',
        meta: {
            nav: '业务模块'
        }
    }
      
]