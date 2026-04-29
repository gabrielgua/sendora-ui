<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { ChevronRight, Home } from '@lucide/vue';

const route = useRoute();

const breadcrumbs = computed(() => {

  return route.matched
    .filter(record => record.name && record.path !== '/' && record.path !== '/home')
    .map(record => ({
      name: String(record.name),
      path: record.path
    }));
});
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex">
    <ol class="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">

      <li>
        <RouterLink to="/home"
          class="flex items-center gap-3 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
          title="Home">
          <Home class="h-4 w-4" />
          <span>Home</span>
        </RouterLink>
      </li>

      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path" class="flex items-center space-x-2">
        <ChevronRight class="h-4 w-4 text-zinc-300 dark:text-zinc-700" />

        <span v-if="index === breadcrumbs.length - 1"
          class="font-medium text-zinc-900 dark:text-zinc-100 tracking-tight" aria-current="page">
          {{ crumb.name }}
        </span>

        <RouterLink v-else :to="crumb.path"
          class="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
          {{ crumb.name }}
        </RouterLink>
      </li>

    </ol>
  </nav>
</template>