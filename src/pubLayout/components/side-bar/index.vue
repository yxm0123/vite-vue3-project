<template>
  <div class="sidebar-container">
    <div class="logo">
      <el-icon size="26px">
        <el-icon size="20px" color="#fff">
          <OfficeBuilding />
        </el-icon>
      </el-icon>
      <h1 class="logo-text">管理平台</h1>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :default-active="activeMenu"
        :unique-opened="true"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        class="el-menu-vertical-demo"
        mode="vertical"
      >
        <SidebarItem 
          v-for="item in routerList"
          :key="item.path"
          :index="item.path"
          :item="item"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
  import {reactive,computed, onMounted} from 'vue';
  import { useRoute } from 'vue-router';
  import SidebarItem from './sideBarItem.vue';
  import { routes } from '@/router/index';
  import { mystorage } from '@/utils/storage';
  const routerList: Array<any> = reactive([])
  onMounted(()=>{
    let list:any = []
    routes.forEach((item:any)=>{
      if (item.path === '/') {
        list.push(...item.children)
      }
    })
    list.forEach((item:any)=>{
      if(item.meta.roles.includes(mystorage.get('role')) ){
        routerList.push(item)
      }
    })
    filterChildrenRoutes(routerList)
  })

  /**
   * 子路由权限过滤
   */
  const filterChildrenRoutes = (childrenRouters:any) =>{
    let childrenList:Array<any> = []
    childrenRouters.forEach((item:any)=>{
      if(item.meta.roles.includes(mystorage.get('role')) ){
        childrenList.push(item);
        if(item.children){
          filterChildrenRoutes(item.children)
        }
      }
    });
    childrenRouters.length = 0
    childrenRouters.push(...childrenList)
  }
   const activeMenu = computed(() => {
      const route = useRoute();
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
        if (meta.hidden) {
          return meta.parentPath;
        }
      return path;
    });
    
    
</script>

<style lang="scss" scoped>
.sidebar-container{
  .logo {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #304156;
    padding-left: 20px;
    border-radius: 0 30px 0 0;
    .logo-text {
      display: inline-block;
      height: 50px;
      font-size: 14px;
      line-height: 50px;
      color: #fff;
    }
  }
  .el-scrollbar {
    height: 100%;
    :deep .el-menu-item{
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
      line-height:23px;
      height: auto;
      // white-space:pre-wrap !important;
    }
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
    :deep .is-active{
      background: rgb(38, 52, 69);
      color: #fff;
      // border-right: 3px solid #409EFF;
    }
  }
}
</style>