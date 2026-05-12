<script setup lang="ts">
import HomeDashboard from '@/components/HomeDashboard.vue';
import { ArrowRight, LayoutDashboard } from '@lucide/vue';
import Button from '../components/Button.vue';
import Divider from '../components/Divider.vue';
import PageTitle from '../components/PageTitle.vue';
import SectionTitle from '../components/SectionTitle.vue';
import HomeRecentProjectsListing from '@/components/HomeRecentProjectsListing.vue';

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

      <HomeDashboard />
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

      <HomeRecentProjectsListing />
    </section>
  </div>
</template>