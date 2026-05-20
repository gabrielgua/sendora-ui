<script setup lang="ts">
import ProjectListing from '@/components/ProjectListing.vue'
import { Plus } from '@lucide/vue'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import Divider from '../components/Divider.vue'
import PageTitle from '../components/PageTitle.vue'
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/project.store'

const { fetchAuthenticatedUserProjects } = useProjectStore();
onMounted(() => {
  fetchAuthenticatedUserProjects();
})
</script>


<template>
  <Container tag="main" class="space-y-5">
    <div class="flex items-center justify-between">
      <PageTitle>
        <template #title>Seus Projetos</template>
        <template #subtitle>Gerencie suas chaves de API e domínios.</template>
      </PageTitle>
      <Button>
        <Plus class="h-4 w-4 mr-2" />
        Novo Projeto
      </Button>
    </div>
    <Divider />
    <ProjectListing />
  </Container>
</template>