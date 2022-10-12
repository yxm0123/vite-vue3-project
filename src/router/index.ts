
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'login',
      keepAlive: true,
      requireAuth: false,
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
    component: () => import('@/pubLayout/index.vue'),
    redirect: '/dashboad',
    meta: { 
      title: 'home', 
      icon: 'HomeFilled', 
      hidden: false
    },
    children: [
      {
        path: '/dashboad',
        component: () => import('@/views/my-dashboard/index.vue'),
        name: 'dashboad',
        meta: { 
          title: 'home', 
          icon: 'HomeFilled', 
          hidden: false
        }
      },
      {
        path: '/system',
        meta: { 
          title: 'system', 
          icon: 'Platform', 
          hidden: false
        },
        children:[
          {
            path: '/system/user',
            component: () => import('@/views/my-system/user.vue'),
            name: 'user',
            meta: { 
              title: 'user', 
              icon: 'HomeFilled', 
              hidden: false
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;