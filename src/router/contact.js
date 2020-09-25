/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-09-21 20:17:01
 * @FilePath: /Website/src/router/contact.js
 */


export default [
    {
        path: 'contact',
        component: resolve => require(['@/views/contact'], resolve),
        name: 'Contact',
        meta: {
            nav: '关于我们'
        }
    }
      
]