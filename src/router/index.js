import {createRouter, createWebHashHistory} from './router';
import Home from '../views/home/index.vue';
import About from '../views/about/index.vue';
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    // component: () => import('../views/about/index.vue'),
    component: About,
    meta: {
      title: '关于'
    }
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
});

export {
  router
};