<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import Container from './components/Container.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

import { useAuthStore } from './stores/auth.store'

const route = useRoute()
const authStore = useAuthStore()

onMounted(() => {
  authStore.initialize()
})

const hideLayout = computed(() => route.meta.hideLayout)
</script>

<template>
  <template v-if="hideLayout">
    <RouterView />
  </template>

  <template v-else>
    <div class="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Sidebar />
      <div class="flex flex-1 flex-col">
        <Header />
        <Container>
          <RouterView />
        </Container>
      </div>
    </div>
  </template>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>