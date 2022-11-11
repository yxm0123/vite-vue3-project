import router from '@/router/index';
import { mystorage } from '@/utils/storage';
import {useRouterStore} from '@/store/permission'
import {useUserStore} from '@/store/user';
router.beforeEach(async(to: any, from: any, next: any) => {
  const token = mystorage.get('token');
  const useUser = useUserStore()
  const useRouters = useRouterStore();
  const toRoles = to.meta.roles || []
  // 判断是否有token
  if(token){
    if(to.path === '/login'){
      next({path: '/'})
    }else{
      // 判断是否已经登录获取到用户信息，没有的话需要调用获取用户信息
      if(useUser.roles.length===0){
        await useUser.setUserInfo()
        await useRouters.setSideBarRouters();
        next({ ...to, replace: true })
      }else{
        // 判断用户是否有权限进入此路由
        if(toRoles.includes(mystorage.get('role'))){
          next();
        }else{
          // 没有权限跳转到登录页面
          mystorage.set('token', '')
          next({path: '/login'})
        }
      }
    }
  }else{
    if (to.name == "Login") {
      next();
    } else {
      next({path: '/login'});
    }
  }
});

router.afterEach((to: any) => {
  document.title = to.meta.title;
});
