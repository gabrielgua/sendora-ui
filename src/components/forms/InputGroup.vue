<script lang="ts" setup>

defineProps<{
  inputId: string
}>();
</script>

<template>
  <div class="space-y-2">
    <label :for="inputId" class="text-sm font-medium flex items-center gap-2" v-if="$slots['label']">
      <template v-if="$slots['label-icon']">
        <slot name="label-icon" />
      </template>
      <slot name="label" />
    </label>
    <!-- input goes here -->
    <slot name="input" />
  </div>
</template>
