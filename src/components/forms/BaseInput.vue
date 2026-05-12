<script lang="ts" setup>
import type { LucideIcon } from '@lucide/vue';
import Icon from '../Icon.vue';

export type BaseInputSizes = 'sm' | 'md' | 'lg';

export type BaseInputProps = {
  size?: BaseInputSizes,
  inverted?: boolean,
  iconStart?: LucideIcon,
  iconEnd?: LucideIcon
}

withDefaults(defineProps<BaseInputProps>(), {
  size: 'md'
})

const baseInputSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'rounded-xl text-[13px]'],
  ['md', 'rounded-2xl text-sm'],
  ['lg', 'rounded-2xl text-base']
])

const iconLeftSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'ml-2.5'],
  ['md', 'ml-3'],
  ['lg', 'ml-3.5']
])

const iconRightSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'mr-2.5'],
  ['md', 'mr-3'],
  ['lg', 'mr-3.5']
])

const iconSizes = new Map<BaseInputSizes, number>([
  ['sm', 14],
  ['md', 16],
  ['lg', 18]
])

</script>

<template>
  <div
    class="flex items-center w-full rounded-xl border border-outline-border dark:border-outline-border-dark text-ghost dark:text-zinc-400 focus-within:border-ring dark:focus-within:border-ring-dark focus-within:ring-2 focus-within:ring-ring/20 dark:focus-within:ring-ring-dark/20 transition-all duration-200 overflow-hidden"
    :class="[inverted ? 'bg-zinc-100 dark:bg-zinc-900' : 'bg-background dark:bg-background-dark', baseInputSizeStyles.get(size)]">
    <template v-if="iconStart">
      <Icon :icon="iconStart" :size="iconSizes.get(size)" :class="iconLeftSizeStyles.get(size)" />
    </template>
    <slot />
    <template v-if="iconEnd">
      <Icon :icon="iconEnd" :size="iconSizes.get(size)" :class="iconRightSizeStyles.get(size)" />
    </template>
  </div>
</template>
