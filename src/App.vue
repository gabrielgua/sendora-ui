<script setup lang="ts">
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
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

<style>
html.dark {
  color-scheme: dark;
}
</style>
