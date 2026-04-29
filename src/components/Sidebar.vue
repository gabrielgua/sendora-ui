<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar.store';
import {
  FolderKanban,
  Globe,
  House,
  Key,
  LogOut,
  Send,
  Settings
} from '@lucide/vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const sidebarStore = useSidebarStore();
const isCollapsed = computed(() => sidebarStore.isCollapsed);

const menuItems = [
  { name: 'Home', path: '/home', icon: House },
  { name: 'Projetos', path: '/projects', icon: FolderKanban },
  { name: 'Domínios', path: '/domains', icon: Globe },
  { name: 'API Keys', path: '/api-keys', icon: Key },
];

const secondaryItems = [
  { name: 'Configurações', path: '/settings', icon: Settings },
];
</script>

<template>
  <aside
    class="flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-150 ease-in-out h-screen sticky top-0"
    :class="[isCollapsed ? 'w-20 items-center' : 'w-64']">


    <div class="flex items-center p-6 gap-3 overflow-hidden shrink-0">
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
        <Send class="h-4 w-4" />
      </div>
      <span v-if="!isCollapsed"
        class="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap transition-opacity duration-300">
        Sendora
      </span>
    </div>

    <nav class="flex-1 space-y-1 p-4">
      <h6 class="font-black uppercase text-xs tracking-widest text-zinc-400 dark:text-zinc-600 ml-3 mb-2">Menu</h6>
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path"
        class="group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
        active-class="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
        <component :is="item.icon" class="h-5 w-5 shrink-0" />

        <span v-if="!isCollapsed" class="ml-3 whitespace-nowrap transition-opacity duration-300">
          {{ item.name }}
        </span>

        <div v-if="isCollapsed"
          class="fixed left-20 hidden group-hover:block rounded bg-zinc-900 text-white text-xs px-2 py-1">
          {{ item.name }}
        </div>
      </RouterLink>
    </nav>

    <div class="border-t border-zinc-200 dark:border-zinc-800 p-3 space-y-1">
      <RouterLink v-for="item in secondaryItems" :key="item.path" :to="item.path"
        class="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100">
        <component :is="item.icon" class="h-5 w-5 shrink-0" />
        <span v-if="!isCollapsed" class="ml-3">{{ item.name }}</span>
      </RouterLink>

      <button
        class="w-full flex items-center rounded-lg px-3 py-2 text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors">
        <LogOut class="h-5 w-5 shrink-0" />
        <span v-if="!isCollapsed" class="ml-3">Sair</span>
      </button>
    </div>
  </aside>
</template>