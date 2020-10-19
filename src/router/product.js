/*
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-10-13 14:33:06
 * @FilePath: /Website/src/router/product.js
 */
export default [
    {
        path: '/product',
        component: resolve => require(['@/views/product/horse'], resolve),
        name: 'Horse',
        meta: {
            nav: '马说'
        }
    },
    {
        path: '/product_deer',
        component: resolve => require(['@/views/product/deer'], resolve),
        name: 'Deer',
        meta: {
            nav: '鹿曰'
        }
    }
]
