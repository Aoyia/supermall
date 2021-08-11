import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 安装插件
Vue.use(VueRouter);

// 2. 创建router
const routes = [
  {
    //重定向
    path: '',
    redirect: '/home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/Category.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/Cart.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/Profile.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/Detail.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
