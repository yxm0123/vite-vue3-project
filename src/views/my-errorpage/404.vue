<template>
  <div class="error-container">
    <div>没有此页面</div>
    <el-button type="primary" @click="$router.replace('/')">点击返回首页</el-button>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.error-container{
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 20%;
}
</style>