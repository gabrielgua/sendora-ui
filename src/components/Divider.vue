<script setup lang="ts">
interface Props {
  type?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<Props>(), {
  type: 'horizontal'
});
</script>

<template>
  <div v-if="type === 'horizontal'" class="grow border-t border-zinc-200 dark:border-zinc-800"></div>
  <div v-else class="self-stretch border-l border-zinc-200 dark:border-zinc-800" aria-orientation="vertical"></div>
</template>