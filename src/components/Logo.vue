<script setup lang="ts">
import { Send } from '@lucide/vue';
import Icon from './Icon.vue';

</script>

<template>
  <div class="flex items-center gap-2">
    <div
      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
      <Icon :icon="Send" class="h-4 w-4" />
    </div>
    <span class="text-xl font-semibold tracking-tight">Sendora</span>
  </div>
</template>