<script setup lang="ts">
import { ref, computed } from 'vue';
import MetricCard from './MetricCard.vue';
import ProjectCard from './ProjectCard.vue';
import Button from './Button.vue';
import { Plus, LayoutDashboard, ArrowRight } from '@lucide/vue';
import Container from './Container.vue';
import PageTitle from './PageTitle.vue';
import Divider from './Divider.vue';
import SectionTitle from './SectionTitle.vue';

// Dados fake para métricas
const stats = ref([
  { label: 'E-mails Enviados', value: '128,432', icon: 'Send', trend: '12%', trendUp: true },
  { label: 'Projetos Ativos', value: '14', icon: 'FolderKanban', trend: '2', trendUp: true },
  { label: 'Taxa de Entrega', value: '99.2%', icon: 'ShieldCheck', trend: '0.1%', trendUp: true },
  { label: 'Média de Latência', value: '142ms', icon: 'Zap', trend: '5ms', trendUp: false },
]);

// Lista completa (vinda de uma store ou API futuramente)
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

// Pegar apenas os 3 últimos
const latestProjects = computed(() => allProjects.value.slice(0, 3));
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-5 border p-8 rounded-xl border-zinc-200 dark:border-zinc-900">
      <PageTitle class="mb-5 md:mb-6 lg:mb-8">
        <template #title>
          <span class="flex items-center gap-2">
            <LayoutDashboard class="h-8 w-8 text-zinc-400" />
            Bem-vindo de volta, Gabriel!
          </span>
        </template>
        <template #subtitle>
          Aqui está o resumo da sua infraestrutura de e-mails.
        </template>
      </PageTitle>

      <Divider />

      <section class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
      </section>
    </section>

    <section class="space-y-5">
      <div class="flex items-center justify-between">
        <SectionTitle>
          <template #title>Projetos Recentes</template>
        </SectionTitle>
        <RouterLink to="/projects">
          <Button variant="ghost" size="sm" class="group">
            Ver todos os projetos
            <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </RouterLink>
      </div>

      <Divider />

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in latestProjects" :key="project.id" :id="project.id" :name="project.name"
          :destination-email="project.destinationEmail" :apiKey="project.apiKey" :createdAt="project.createdAt"
          :active="project.active" />
      </div>
    </section>
  </div>
</template>