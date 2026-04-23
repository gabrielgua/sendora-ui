<script setup lang="ts">
import type { Project } from '@/types/project';
import { Calendar, ChevronRight, Inbox, Mail } from '@lucide/vue';
import Button from './Button.vue';

defineProps<Project>();
const emit = defineEmits(['details']);
</script>

<template>
  <article
    class="group relative flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
    <div class="flex flex-col gap-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3 grow">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-colors duration-300">
            <Inbox class="h-5 w-5" />
          </div>
          <div class="flex flex-col grow">
            <div class="flex items-center justify-between w-full gap-2">
              <h3 class="font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {{ name }}
              </h3>
              <span
                class="inline-flex items-center rounded-md uppercase bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                #{{ id }}
              </span>
            </div>

            <div class="flex items-center gap-1.5 mt-1">
              <span class="h-1.5 w-1.5 rounded-full"
                :class="active ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-600'"></span>
              <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                {{ active ? 'Ativo' : 'Inativo' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="space-y-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 p-4  border border-zinc-100 dark:border-zinc-800/50">
        <span class="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block">
          Encaminhar para
        </span>
        <div class="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium truncate">
          <Mail class="h-3.5 w-3.5 text-zinc-400 shrink-0" />
          {{ destinationEmail }}
        </div>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4 gap-4">
      <div class="flex items-center gap-1.5 text-[11px] text-zinc-400 italic">
        <Calendar class="h-3 w-3" />
        {{ createdAt }}
      </div>

      <Button variant="secondary" size="sm" @click="emit('details', id)" class="group/btn grow">
        Gerenciar
        <ChevronRight class="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  </article>
</template>