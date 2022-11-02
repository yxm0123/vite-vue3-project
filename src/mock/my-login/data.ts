

export default [
  {
    path: '/system',
    meta: { 
      title: 'system', 
      icon: 'Setting', 
      hidden: false,
      roles: ['admin', 'editor']
    },
    component: 'pubLayout',
    children:[
      {
        path: '/system/user',
        component: '/my-system/user',
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
        component: '/my-system/set',
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