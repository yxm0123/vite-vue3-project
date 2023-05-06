<template>
  <section
    ref="appMain"
    class="app-main"
  >
    <router-view v-slot="{Component}">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-main{
  padding: 20px;
}
</style>