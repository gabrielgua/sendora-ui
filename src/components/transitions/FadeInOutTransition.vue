<template>
  <Transition name="fade" mode="out-in">
    <slot />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  scale: .95;
}
</style>