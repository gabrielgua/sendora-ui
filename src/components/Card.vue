<script setup lang="ts">
import { Info } from '@lucide/vue';
import Icon from './Icon.vue';

</script>

<template>
  <div
    class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm divide-y divide-zinc-200 dark:divide-zinc-800">
    <template v-if="$slots['title']">
      <div class="p-5 flex items-center gap-3">
        <slot name="title-icon">
          <Icon :icon="Info" class="text-zinc-400 dark:text-zinc-500" />
        </slot>
        <h2 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <slot name="title">
            Section Title
          </slot>
        </h2>
        <div v-if="$slots['right-title-content']" class="ml-auto">
          <slot name="right-title-content"></slot>
        </div>
      </div>
    </template>
    <div class="p-5">
      <slot name="content" />
    </div>
    <div v-if="$slots['footer']" class="p-5">
      <slot name="footer" />
    </div>
  </div>
</template>