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
import FadeInOutTransition from './transitions/FadeInOutTransition.vue';
import SidebarRouterLink from './SidebarRouterLink.vue';

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
    class="flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-200 ease-in-out h-screen sticky top-0"
    :class="[isCollapsed ? 'w-20' : 'w-64']">

    <div class="flex items-center p-6 gap-3 overflow-hidden shrink-0">
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
        <Send class="h-4 w-4" />
      </div>
      <FadeInOutTransition>
        <span v-if="!isCollapsed"
          class="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap transition-opacity duration-300">
          Sendora
        </span>
      </FadeInOutTransition>
    </div>

    <nav class="flex-1 p-3 flex flex-col">
      <h6
        class="mb-2 font-black uppercase text-xs tracking-widest text-zinc-400 dark:text-zinc-600 transition-all duration-200"
        :class="isCollapsed ? 'text-center' : 'text-left'">
        Menu
      </h6>

      <div class="flex flex-col gap-1 transition-all duration-200"
        :class="isCollapsed ? 'items-center' : 'items-stretch'">
        <SidebarRouterLink v-for="item in menuItems" :key="item.path" :path="item.path" :icon="item.icon"
          :show-name="!isCollapsed">
          {{ item.name }}
        </SidebarRouterLink>
      </div>
    </nav>
    <div class="flex flex-col border-t border-zinc-200 dark:border-zinc-800 space-y-1 p-3">
      <div class="flex flex-col gap-1 transition-all duration-200"
        :class="isCollapsed ? 'items-center' : 'items-stretch'">
        <SidebarRouterLink v-for="item in secondaryItems" :key="item.path" :path="item.path" :icon="item.icon"
          :show-name="!isCollapsed">
          {{ item.name }}
        </SidebarRouterLink>

        <SidebarRouterLink to="/logout" :icon="LogOut" :show-name="!isCollapsed"
          class="text-danger/70! hover:text-danger!">
          Sair
        </SidebarRouterLink>
      </div>
    </div>

  </aside>
</template>