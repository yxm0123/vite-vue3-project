export default [
  {
    path: '/system',
    meta: { 
      title: 'system', 
      icon: 'Setting', 
      hidden: false,
      roles: ['admin', 'editor']
    },
    // component: () => import('@/views/my-system/index.vue'),
    children:[
      {
        path: '/system/user',
        component: () => import('@/views/my-system/user.vue'),
        name: 'user',
        meta: { 
          title: 'user', 
          icon: 'HomeFilled', 
          hidden: false,
          roles: ['admin','editor']
        }
      },
      {
        path: '/system/set',
        component: () => import('@/views/my-system/set.vue'),
        name: 'set',
        meta: { 
          title: 'set', 
          icon: 'HomeFilled', 
          hidden: false,
          roles: ['admin']
        }
      }
    ]
  }
]