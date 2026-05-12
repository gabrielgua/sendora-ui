<script setup lang="ts">
import { computed, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

const allProjects = ref([
  {
    id: 'nwx-01',
    name: 'NWX Group Main',
    destinationEmail: 'contato@nwxgroup.com',
    active: true,
    apiKey: 'mk_live_...',
    createdAt: '28 Abr 2026'
  },
  {
    id: 'store-22',
    name: 'E-commerce Wiiva',
    destinationEmail: 'vendas@wiiva.com.br',
    active: true,
    apiKey: 'mk_live_...',
    createdAt: '25 Abr 2026'
  },
  {
    id: 'lp-event',
    name: 'Landing Page Verão',
    destinationEmail: 'lead@campanha.com',
    active: false,
    apiKey: 'mk_live_...',
    createdAt: '20 Abr 2026'
  },
  {
    id: 'old-proj',
    name: 'Projeto Antigo',
    destinationEmail: 'old@mail.com',
    active: true,
    apiKey: 'mk_live_...',
    createdAt: '01 Jan 2026'
  }
]);

const latestProjects = computed(() => allProjects.value.slice(0, 3));


</script>

<template>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="project in latestProjects" :key="project.id" :id="project.id" :name="project.name"
      :destination-email="project.destinationEmail" :apiKey="project.apiKey" :createdAt="project.createdAt"
      :active="project.active" />
  </div>
</template>