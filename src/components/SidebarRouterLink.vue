<script setup lang="ts">
import { Info, type LucideIcon } from '@lucide/vue';

withDefaults(defineProps<{
  path?: string,
  showName?: boolean,
  icon?: LucideIcon
}>(), {
  path: '/home',
  showName: true,
  icon: Info
})
</script>

<template>
  <RouterLink :to="path" class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium
    transition-all duration-200
    text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900
    hover:text-zinc-900 dark:hover:text-zinc-100
    active:bg-zinc-100 dark:active:bg-zinc-800"
    active-class="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
    <div class="flex w-5 shrink-0 justify-center">
      <component :is="icon" class="h-5 w-5 shrink-0" />
    </div>

    <div class="grid transition-all duration-200" :class="showName
      ? 'ml-3 grid-cols-[1fr] opacity-100'
      : 'ml-0 grid-cols-[0fr] opacity-0'">
      <div class="overflow-hidden">
        <span class="whitespace-nowrap">
          <slot />
        </span>
      </div>
    </div>
  </RouterLink>
</template>