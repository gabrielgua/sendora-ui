<script lang="ts" setup>
import { Mail } from '@lucide/vue';
import ThemeSwitcher from './ThemeSwitcher.vue';


</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
          <Mail class="h-4 w-4" />
        </div>
        <span class="text-xl font-semibold tracking-tight">Sendora</span>
      </div>

      <div class="flex items-center gap-4">
        <ThemeSwitcher />

        <div
          class="h-8 w-8 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=gabrielgua" alt="User"
            class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </header>
</template>