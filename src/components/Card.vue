<script setup lang="ts">
import { Info } from '@lucide/vue';

</script>

<template>
  <div
    class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm divide-y divide-zinc-200 dark:divide-zinc-800">
    <template v-if="$slots['title']">
      <div class="p-5 flex items-center gap-3">
        <slot name="title-icon">
          <Info class="size-5 text-zinc-400 dark:text-zinc-500" />
        </slot>
        <h2 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <slot name="title">
            Título da Seção
          </slot>
        </h2>
      </div>
    </template>
    <div class="p-5">
      <slot name="content" />
    </div>
  </div>
</template>