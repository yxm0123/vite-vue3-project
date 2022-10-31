
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import dashboard from './my-dashboard'
import system from './my-system'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'login',
      hidden: true
    },
    component: () => import('@/views/my-login/login.vue')
  },
  {
    path: '/404',
    name: 'Error',
    meta: {
      title: '404',
      hidden: true
    },
    component: () => import('@/views/my-errorpage/404.vue')
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/dashboad',
    component: () => import('@/pubLayout/index.vue'),
    children: [
      ...dashboard,
    ]
  },
  ...system
]
console.log(routes, 1212)
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;