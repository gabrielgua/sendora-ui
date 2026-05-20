<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar.store';
import { LogOut, PanelRightCloseIcon, PanelRightOpen } from '@lucide/vue';
import { computed } from 'vue';
import Avatar from './Avatar.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import Button from './Button.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';

const sidebarStore = useSidebarStore();
const isCollapsed = computed(() => sidebarStore.isCollapsed)

const fakeUser = {
  name: 'Gabriel Guaitanele',
  email: 'gabriel.guaita45@gmail.com',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gabrielgua',
  isAdmin: true
}

</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xs">
    <nav class="flex items-center justify-between h-18 px-5">

      <div class="flex items-center gap-5">
        <Button size="icon" variant="outline" @click="sidebarStore.toggleSidebar()" class="">
          <PanelRightOpen v-if="!isCollapsed" class="size-4" />
          <PanelRightCloseIcon v-else class="size-4" />
        </Button>

        <Divider type="vertical" />

        <Breadcrumbs />
      </div>



      <div class="flex items-center gap-5">
        <Avatar :name="fakeUser.name" :email="fakeUser.email" :avatar-url="fakeUser.avatarUrl"
          :is-admin="fakeUser.isAdmin" />
        <Divider type="vertical" />
        <div class="flex items-center gap-2">
          <ThemeSwitcher />
          <Button variant="ghost" size="icon">
            <Icon :icon="LogOut" :size="16" />
          </Button>
        </div>
      </div>
    </nav>
  </header>
</template>