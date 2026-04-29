import { useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapsed = ref(false)
  const toggleSidebar = useToggle(isCollapsed)

  return { isCollapsed, toggleSidebar }
})
