<template>
  <div class="nav-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item 
        v-for="(item, index) in path.menuList" 
          :key="item.path" 
          :to="{path: item.path}"
        >
        {{ $t(`public.${item.meta.title}`)}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
         <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/')">首页</el-dropdown-item>
            <el-dropdown-item divided @click="$router.push('/login')">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
        <el-dropdown class="lang-container right-menu-item">
        <div class="">
          {{$t(`public.${current_lang}`)}}
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item 
              v-for="item in langList" 
              :key="item.value"
              @click="changeLang(item.value)"
            >
              {{$t(`public.${item.value}`)}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, reactive, ref,watch,nextTick} from 'vue';
  import { useRoute } from 'vue-router';
  import { mystorage } from '@/utils/storage';
  import i18n from '@/language';
  const path = computed(() => {
    const route = useRoute();
    const { meta, path } = route;
    let matched = route.matched.filter((item) => item.meta && item.meta.title)
    let menuList = matched.filter((item) => item.meta && item.meta.title && item.name !== 'dashboad')
    console.log(menuList, 12)
    return {
      meta,
      path,
      menuList
    };
  });
  const langList = reactive([
    {
      lang: '中文',
      value: 'zh_CN'
    },
    {
      lang: 'English',
      value: 'en_US'
    }, 
  ]);
  const current_lang = ref<string>(mystorage.get('current_lang'))
  const changeLang = (lang:string)=>{
    mystorage.set('current_lang',lang)
    i18n.global.locale = lang
    current_lang.value = lang
  }
</script>

<style lang="scss" scoped>
  .nav-bar{
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    padding: 0 25px;
    box-shadow: 0 2px 0px #0000001f, 0 0 0px #0000000a;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-breadcrumb{
      height: 100%;
      cursor: pointer;
      line-height: 50px;
      .el-breadcrumb__inner{
        cursor: pointer;
      }
    }
    .avatar-container{
      cursor: pointer;
    }
    .lang-container{
      cursor: pointer;
      height: 100%;
      line-height: 50px;
      margin-left: 30px;
    }
  }
</style>