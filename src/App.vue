<script setup></script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="container">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transition: all 0.4s ease;
  transform: translateY(0);
}

.container-enter-from {
  opacity: 0;
  transform: translateY(60px);
  position: absolute;
  z-index: 100;
}
.container-leave-to {
  opacity: 0;
  transform: translateY(-240px);
  position: absolute;
  z-index: 90;
}
</style>
