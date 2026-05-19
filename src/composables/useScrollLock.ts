import { watch, type Ref } from 'vue'

export const useScrollLock = (lock: Ref<Boolean>) => {
  watch(
    lock,
    (newVal) => {
      document.body.style.overflow = newVal ? 'hidden' : ''
    },
    { immediate: true },
  )
}
