import router from '@/router/index';
import { mystorage } from '@/utils/storage';
router.beforeEach(async(to: any, from: any, next: any) => {
  let token = mystorage.get('token');
  if(token){
    const routers = router.getRoutes().filter((item:any)=>item.path === to.path)
    if(routers.length){
      next();
    }else{
      next('/404')
    }
  }else{
    // next('/login');
    // router.push('/login')
    if (to.name == "Login") {
      next();
    } else {
      next('/login');
      // router.push('/login')
    }
  }
});

router.afterEach((to: any) => {
  document.title = to.meta.title;
});
