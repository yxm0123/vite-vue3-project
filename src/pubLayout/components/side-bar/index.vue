<template>
  <div class="sidebar-container">
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
  const routerList: Array<any> = reactive([])
  onMounted(()=>{
    routes.forEach((item:any)=>{
      if (item.path === '/') {
        routerList.push(...item.children)
      }
    })
  })
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
.el-scrollbar {
  height: 100%;
  :deep .el-menu-item{
    // width: 190px;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    line-height:23px;
    height: auto;
    white-space:pre-wrap !important;
  }
}
.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>