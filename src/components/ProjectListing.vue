<script setup lang="ts">
import { useProjectStore } from '@/stores/project.store'
import { useRouter } from 'vue-router'
import ProjectCard from './ProjectCard.vue'

const projectStore = useProjectStore();

const router = useRouter();

const goToProject = (projectId: string) => {
  router.push(`/projects/${projectId}`);
}

</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="project in projectStore.projects" :key="project.id" :id="project.id" :name="project.name"
      :destination-email="project.destinationEmail" :createdAt="project.createdAt" :active="project.active"
      @details="goToProject" />
  </div>
</template>