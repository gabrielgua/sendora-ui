<script setup lang="ts">
import { computed } from 'vue';
import * as Icons from '@lucide/vue';
import Card from './Card.vue';

interface Props {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendUp?: boolean;
}

const props = defineProps<Props>();

// @ts-ignore - dinamicamente pega o ícone do Lucide
const iconComponent = computed(() => (Icons as any)[props.icon]);
</script>

<template>
  <Card>
    <template #content>
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {{ label }}
        </span>
        <div class="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-zinc-500">
          <component :is="iconComponent" class="h-4 w-4" />
        </div>
      </div>

      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-black text-zinc-900 dark:text-zinc-100 tabular-nums">
            {{ value }}
          </h2>
          <p v-if="trend" class="text-[11px] mt-1 font-medium" :class="trendUp ? 'text-emerald-500' : 'text-rose-500'">
            {{ trendUp ? '↑' : '↓' }} {{ trend }} <span class="text-zinc-400 font-normal ml-1">vs mês passado</span>
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>