export default [
  {
    path: '/system/user',
    meta: { 
      title: 'system', 
      icon: 'Setting', 
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