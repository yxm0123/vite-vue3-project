import router from '@/router/index';
import { mystorage } from '@/utils/storage';
import {useRouterStore} from '@/store/permission'
router.beforeEach(async(to: any, from: any, next: any) => {
  let token = mystorage.get('token');
  let getRouter = mystorage.get('storeRouter')
  const userRouters = useRouterStore();
  // 判断是否有token
  if(token){
    if(to.path === '/login'){
      next({path: '/'})
    }else{
      // 如果没有从接口获取到Router信息，则需要调用接口获取
      if(!getRouter){
        userRouters.getSideBarRouters()
      }else{
        // 如果获取到了直接给routers赋值
        userRouters.setSideBarRouters(getRouter)
      }
      next();
    }
  }else{
    if (to.name == "Login") {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach((to: any) => {
  document.title = to.meta.title;
});
