import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index/index')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('@/views/category/category')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/cart/cart')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/views/my/my')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/search/search')
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: () => import('@/views/goodsDetail/goodsDetail')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/views/order/order')
    }
  ]
})