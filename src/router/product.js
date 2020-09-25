/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-09-21 22:39:50
 * @FilePath: /Website/src/router/product.js
 */


export default [
    {
        path: 'product',
        component: resolve => require(['@/views/product'], resolve),
        name: 'Product',
        meta: {
            nav: '产品中心'
        }
    },
    {
        path: 'product/:id',
        component: resolve => require(['@/views/product/detail'], resolve),
        name: 'Product_Detail',
        meta: {
            nav: '产品中心'
        }
    },
      
]
