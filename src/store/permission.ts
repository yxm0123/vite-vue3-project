import {defineStore} from 'pinia';
import router,{ routes } from '@/router';
import pubLayout from '@/pubLayout/index.vue';
import api from '@/api';
import { mystorage } from '@/utils/storage';
const modules = import.meta.glob('@/views/**/*.vue')
export const useRouterStore = defineStore('routers',{
  state: ()=>({
    routes: [],
    sidebarRouters: []
  }),
  actions:{
    async getSideBarRouters(){
      try {
        let {data} =  await api.apiLogin.getRouters({});
        let concatRouters:any = routes.concat(filterSideBarRouter(data));
        this.sidebarRouters = concatRouters;
        this.routes = concatRouters;
        concatRouters.forEach((route:any) => {
          router.addRoute(route)
        });
        mystorage.set('storeRouter',this.routes)
      } catch (error) {
       console.log(error) 
      }
    },
    setSideBarRouters(routers:any) {
      this.sidebarRouters = routers;
      this.routes = routers;
      routers.forEach((route:any) => {
        router.addRoute(route)
      });
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
const loadComponent = (com:String) =>{
  let res;
  for (const path in modules) {
    const dir = path.split('views')[1].split('.vue')[0];
    if (dir === com) {
        res = () => modules[path]();
    }
  }
  return res;
}