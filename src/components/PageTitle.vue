<template>
  <div>
    <h1 class="text-2xl font-bold tracking-tight">
      <slot name="title" />
    </h1>
    <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400" v-if="$slots['subtitle']">
      <slot name="subtitle" />
    </p>
  </div>
</template>