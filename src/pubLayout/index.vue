<template>
  <div class="app-wrapper">
    <SideBar 
      class="el-scrollbar" 
    />
    <div class="main-container">
      <NavBar />
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SideBar from './components/side-bar/index.vue';
  import NavBar from './components/nav-bar/index.vue';
  import AppMain from './components/appMain.vue';
</script>

<style lang="scss">
  .main-container{
    margin-left: 200px;
  }
  .sidebar-container {
    // reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }

    .el-scrollbar__view {
      height: 100%
    }

    .el-scrollbar__bar {
      &.is-vertical {
        right: 0px;
      }

      &.is-horizontal {
        display: none;
      }
    }
  }
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  width:200px !important;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>