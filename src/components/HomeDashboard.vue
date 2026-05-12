<script setup lang="ts">
import { ref } from 'vue';
import MetricCard from './MetricCard.vue';

// Dados fake para métricas
const stats = ref([
  { label: 'E-mails Enviados', value: '128,432', icon: 'Send', trend: '12%', trendUp: true },
  { label: 'Projetos Ativos', value: '14', icon: 'FolderKanban', trend: '2', trendUp: true },
  { label: 'Taxa de Entrega', value: '99.2%', icon: 'ShieldCheck', trend: '0.1%', trendUp: true },
  { label: 'Média de Latência', value: '142ms', icon: 'Zap', trend: '5ms', trendUp: false },
]);

</script>

<template>
  <section class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <MetricCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
  </section>
</template>