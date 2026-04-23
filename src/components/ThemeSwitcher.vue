<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark({ selector: 'html' })
const toggleDark = useToggle(isDark)

</script>

<template>
  <button @click="toggleDark()"
    class="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-all">
    <Transition name="icon" mode="out-in">
      <Sun v-if="!isDark" key="sun" class="h-4 w-4 text-amber-400" />

      <Moon v-else key="moon" class="h-4 w-4 text-zinc-600 dark:text-zinc-300" />
    </Transition>
  </button>
</template>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: all 0.25s ease;
}

.icon-enter-from {
  opacity: 0;
  transform: scale(0.6) rotate(-90deg);
}

.icon-enter-to {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.icon-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.icon-leave-to {
  opacity: 0;
  transform: scale(0.6) rotate(90deg);
}
</style>