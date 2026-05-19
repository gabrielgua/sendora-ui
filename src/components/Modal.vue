<script lang="ts" setup>
import { Info, X } from '@lucide/vue';
import Card from './Card.vue';
import Icon from './Icon.vue';
import { computed, Teleport, Transition } from 'vue';
import { useScrollLock } from '@/composables/useScrollLock';
import Button, { type ButtonVariant } from './Button.vue';

export type ModalVariant = 'default' | 'danger' | 'success' | 'warning';

defineEmits(['on-close', 'on-confirm'])

const props = withDefaults(defineProps<{
  show: boolean
  variant?: ModalVariant,
  actionButtons?: boolean,
  cancelText?: string,
  confirmText?: string
}>(), {
  show: false,
  variant: 'default',
  actionButtons: true,
  cancelText: 'Cancel',
  confirmText: 'Confirm'
})


const show = computed(() => props.show);
useScrollLock(show);


const textColors = new Map<ModalVariant, string>([
  ['default', 'text-text dark:text-text-dark'],
  ['warning', 'text-warning'],
  ['danger', 'text-danger'],
  ['success', 'text-success']
])

const confirmButtonVariants = new Map<ModalVariant, ButtonVariant>([
  ['default', 'primary'],
  ['warning', 'warning'],
  ['danger', 'danger'],
  ['success', 'success']
])

</script>

<template>
  <Teleport to="body">
    <Transition name="modal-backdrop">
      <div @click.self="$emit('on-close')" v-show="show"
        class="fixed inset-0 z-9999 top-0 left-0 bg-black/60 w-full h-dvh grid place-items-center">

        <Transition name="modal-content">
          <Card v-if="show" class="transition-all w-full max-w-xl min-w-0 sm:min-w-75">
            <template #title-icon>
              <slot name="modal-title-icon">
                <Icon :icon="Info" :class="textColors.get(variant)" />
              </slot>
            </template>
            <template #title>
              <span :class="textColors.get(variant)">
                <slot name="modal-title">
                  Modal Title
                </slot>
              </span>
            </template>
            <template #right-title-content>
              <Button variant="ghost" size="icon" @click="$emit('on-close')" class="-my-3 -mx-1">
                <Icon :icon="X" />
              </Button>
            </template>
            <template #content>
              <h2 class="text-text/80 dark:text-text-dark/80">
                <slot name="modal-content">
                  Modal content goes here. You can put any content you want inside the modal.
                </slot>
              </h2>
            </template>

            <template #footer v-if="actionButtons">
              <div class="flex items-center *:grow gap-5">
                <slot name="modal-buttons">
                  <Button variant="outline" @click="$emit('on-close')">{{ cancelText }}</Button>
                  <Button :variant="confirmButtonVariants.get(variant)" @click="$emit('on-confirm')">
                    {{ confirmText }}
                  </Button>
                </slot>
              </div>
            </template>
          </Card>
        </Transition>

      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: all 250ms ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  /* cubic-bezier(.47,1.64,.41,.8); */
}

.modal-content-enter-from,
.modal-content-leave-to {
  scale: .85;
  opacity: 0;
}
</style>