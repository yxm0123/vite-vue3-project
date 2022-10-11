<template>
  <div class="menu-wrapper">
    <!-- 一级菜单 -->
    <el-menu-item v-if="!isShow(item)&&!item.meta.hidden" :index="item.path">
      <el-icon :size="16">
        <component :is="item.meta.icon"/>
       </el-icon>
      <template #title>
        <span>{{ $t(`public.${item.meta.title}`) }}</span>
      </template>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-sub-menu v-if="isShow(item)&&!item.meta.hidden" :index="item.path">
      
      <template #title>
        <el-icon :size="16">
          <component :is="item.meta.icon"/>
        </el-icon>
        <span>{{ $t(`public.${item.meta.title}`)}}</span>
      </template>
      <!-- 三级菜单 -->
      <div v-for="child in item.children" :key="child.path">
        <SideBarItem
          v-if="isShow(child)&&!child.meta.hidden"
          :key="child.path"
          :index="child.path"
          :item="child"
        />
        <el-menu-item v-if="!isShow(child)&&!child.meta.hidden" :index="child.path">
          <template #title>
            <span>{{ $t(`public.${child.meta.title}`) }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  })
  const isShow = computed(()=>{//代表item.children
    return (item:any)=>{
      if(item.children&&item.children!=[]){
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
</script>

<style lang="scss" scoped>

</style>