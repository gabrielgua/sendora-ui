<script setup lang="ts">
import type { Project } from '@/types/project'
import { reactive } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const projects = reactive<Project[]>([
  {
    id: 'proj_1',
    name: 'NWX Group',
    destinationEmail: 'support@nwxgroup.com',
    apiKey: 'mk_live_8f7d9a0b1c2e3f4g5h6i7j8k9l0m1n2',
    createdAt: '23 Abr 2026',
    active: true,
  },
  {
    id: 'proj_2',
    name: 'Landing Page Evento',
    destinationEmail: 'help@evento.nwxgroup.com',
    apiKey: 'mk_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p',
    createdAt: '15 Abr 2026',
    active: false,
  }
])

const goToProject = (projectId: string) => {
  router.push(`/projects/${projectId}`);
}

</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :name="project.name"
      :destination-email="project.destinationEmail" :apiKey="project.apiKey" :createdAt="project.createdAt"
      :active="project.active" @details="goToProject" />
  </div>
</template>