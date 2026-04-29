<script lang="ts" setup>
withDefaults(defineProps<{
  tag?: string
}>(), {
  tag: 'div'
})
</script>

<template>
  <component :is="tag" class="container mx-auto w-full max-w-8xl p-5 md:p-6 lg:p-8 transition-all">
    <slot />
  </component>
</template>