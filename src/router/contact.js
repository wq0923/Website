/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-10-15 14:06:52
 * @FilePath: /Website/src/router/contact.js
 */


export default [
    {
        path: '/contact',
        component: resolve => require(['@/views/contact'], resolve),
        name: 'Contact',
        meta: {
            nav: '联系我们'
        }
    }
      
]