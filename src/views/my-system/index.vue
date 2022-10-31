<template>
<!-- <div>56565</div> -->
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script></script>

<style lang="scss" scoped></style>