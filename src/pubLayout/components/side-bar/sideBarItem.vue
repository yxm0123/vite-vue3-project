<template>
  <div class="menu-wrapper">
    <template v-if="hasOneChild(item.children,item)">
      <el-menu-item :index="dataMap.oneChild.path">
        <el-icon :size="16">
          <component :is="dataMap.oneChild.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ $t(`public.${dataMap.oneChild.meta.title}`) }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 一级菜单 -->
    <template v-else>
      <el-menu-item
        v-if="!isShow(item)&&!item.meta.hidden"
        :index="item.path"
      >
        <el-icon :size="16">
          <component :is="item.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ $t(`public.${item.meta.title}`) }}</span>
        </template>
      </el-menu-item>
      <!-- 二级菜单 -->
      <el-sub-menu
        v-if="isShow(item)&&!item.meta.hidden"
        :index="item.path"
      >
        <template #title>
          <el-icon :size="16">
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ $t(`public.${item.meta.title}`) }}</span>
        </template>
        <!-- 三级菜单 -->
        <div
          v-for="child in item.children"
          :key="child.path"
        >
          <SideBarItem
            v-if="isShow(child)&&!child.meta.hidden"
            :key="child.path"
            :index="child.path"
            :item="child"
          />
          <el-menu-item
            v-if="!isShow(child)&&!child.meta.hidden"
            :index="child.path"
          >
            <template #title>
              <span>{{ $t(`public.${child.meta.title}`) }}</span>
            </template>
          </el-menu-item>
        </div>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive } from 'vue';
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });
  const isShow = computed(()=>{//代表item.children
    return (item:any)=>{
      if(item.children && item.children!=[]){
        let a = false;
        item.children.forEach((item:any)=>{
          if(!item.meta.hidden){
            a = true;
          }
        });
        return a;
      }else{
        return false;
      }
    };
  });
  const dataMap = reactive({
    oneChild: {}
  });
  // 判断是否只有一个子路由
  const hasOneChild = (children = [],parent:any)=>{
    let isOneChild = false;
    if(!children){
      children = [];
    }
    let childrenList = children.filter((item:any)=>{
      if(item.meta.hidden){
        return false;
      }else{
        dataMap.oneChild = item;
        return true;
      }
    });
    if(childrenList.length === 1){
      isOneChild = true;
    }
    if(childrenList.length === 0){
      dataMap.oneChild = { ...parent};
      isOneChild = true;
    }
    return isOneChild;
  };
  
</script>

<style lang="scss" scoped>

</style>