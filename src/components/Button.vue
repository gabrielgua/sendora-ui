<script setup lang="ts">
import { computed } from 'vue';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'

interface Props {
  variant?: ButtonVariant;
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
  primary: 'bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-dark-foreground hover:bg-primary-hover dark:hover:bg-primary-dark-hover shadow-sm',
  secondary: 'bg-secondary dark:bg-secondary-dark text-secondary-foreground dark:text-secondary-dark-foreground hover:bg-secondary-hover dark:hover:bg-secondary-dark-hover',
  outline: 'border border-outline-border dark:border-outline-border-dark bg-transparent text-foreground dark:text-foreground-dark hover:bg-zinc-50 dark:hover:bg-zinc-800',
  ghost: 'bg-transparent text-foreground dark:text-foreground-dark hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground-dark dark:hover:text-foreground-dark',
  danger: 'bg-danger dark:bg-danger-hover text-white hover:bg-danger-hover shadow-sm',
  success: 'bg-success text-white hover:bg-success-hover shadow-sm',
  warning: 'bg-warning text-white hover:bg-warning-hover shadow-sm',
};

const sizeStyles = {
  sm: 'py-2 px-3 text-xs',
  md: 'py-2.5 px-3.5 text-sm',
  lg: 'py-3 px-6 text-base',
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