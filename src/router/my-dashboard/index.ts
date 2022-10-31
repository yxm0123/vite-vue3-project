export default [
  {
    path: '/dashboard',
    component: () => import('@/views/my-dashboard/index.vue'),
    name: 'dashboard',
    meta: { 
      title: 'home', 
      icon: 'HomeFilled', 
      hidden: false,
      roles: ['admin', 'editor']
    }
  },
]