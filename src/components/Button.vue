<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  loading: false
});

const variantStyles = {
  primary: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm',
  secondary: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700',
  outline: 'border border-zinc-200 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800',
  ghost: 'bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100',
  danger: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm'
};

const sizeStyles = {
  sm: 'h-8 ps-2 pe-3 text-xs',
  md: 'h-10 ps-4 pe-5 text-sm',
  lg: 'h-12 ps-6 pe-6 text-base',
  icon: 'h-9 w-9 grid place-items-center p-0'
};

const classes = computed(() => {
  return [
    'flex items-center justify-center rounded-lg font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-300 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
    variantStyles[props.variant],
    sizeStyles[props.size]
  ];
});
</script>

<template>
  <button :type="type" :class="[classes]" :disabled="disabled || loading">
    <span v-if="loading"
      class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
    <slot />
  </button>
</template>