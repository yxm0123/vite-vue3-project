export default [
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
]