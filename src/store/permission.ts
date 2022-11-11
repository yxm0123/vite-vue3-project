import {defineStore} from 'pinia';
import router,{ routes } from '@/router';
import pubLayout from '@/pubLayout/index.vue';
import api from '@/api';
export const useRouterStore = defineStore('routers',{
  state: ()=>({
    routes: [],
    sidebarRouters: []
  }),
  actions:{
    // 1. 获取到router存储起来
    // 2. 在获取router的时候做判断
    async setSideBarRouters(){
      try {
        let {data} = await api.apiLogin.getRouters({});
        // 把从接口获取的路由处理后与本地路由合并
        let concatRouters:any = routes.concat(filterSideBarRouter(data));
        this.sidebarRouters = concatRouters;
        this.routes = concatRouters;
        concatRouters.forEach((route:any) => {
          router.addRoute(route)
        });
      } catch (error) {
       console.log(error) 
      }
    }
  }
})

// 处理路由
const filterSideBarRouter = (sideBarRouter:any)=>{
  return sideBarRouter.filter((item:any)=>{
    if(item.children && item.children.length){
      item.children = filterChildren(item.children);
    }
    if(item.component){
      // 如果是Layout就是Layout组件
      if(item.component === 'pubLayout'){
        item.component = ()=>import('@/pubLayout/index.vue')
      }else{
        // 加载路由
        item.component = loadComponent(item.component)
      }
    }
    return true
  })
}
// 处理子路由
const filterChildren = (childrenMap:any)=>{
  return childrenMap.filter((child:any)=>{
    if(child.children&&child.children.length){
      filterChildren(child.children)
    }
    if(child.component){
      child.component = loadComponent(child.component)
    }
    return true
  })
}
// 加载路由
const modules = import.meta.glob('@/views/**/*.vue')
const loadComponent = (comp:String) =>{
  let res;
  for (const path in modules) {
    const dir = path.split('views')[1].split('.vue')[0];
    if (dir === comp) {
      res = () => modules[path]();
    }
  }
  return res;
}