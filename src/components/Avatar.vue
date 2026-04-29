<script setup lang="ts">
import { computed } from 'vue';
import { ShieldCheck, User } from '@lucide/vue';

interface Props {
  name: string;
  email: string;
  avatarUrl?: string;
  isAdmin?: boolean;
  showDetails?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isAdmin: false,
  showDetails: true
});

// Gera iniciais caso não haja imagem
const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="relative shrink-0">
      <div
        class="h-9 w-9 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="name" class="h-full w-full object-cover" />
        <div v-else class="flex h-full w-full items-center justify-center text-xs font-bold text-zinc-500">
          {{ initials }}
        </div>
      </div>

      <div v-if="isAdmin"
        class="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-[10px] text-white dark:text-zinc-900 shadow-sm border border-white dark:border-zinc-950"
        title="Administrador">
        <ShieldCheck class="h-2.5 w-2.5" />
      </div>
    </div>

    <div v-if="showDetails" class="flex flex-col overflow-hidden transition-opacity duration-300">
      <div class="flex items-center gap-1.5">
        <span class="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {{ name }}
        </span>
        <span v-if="isAdmin"
          class="rounded bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 text-[9px] font-black uppercase tracking-tight text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
          Admin
        </span>
      </div>
      <span class="truncate text-xs text-zinc-500 dark:text-zinc-400">
        {{ email }}
      </span>
    </div>
  </div>
</template>