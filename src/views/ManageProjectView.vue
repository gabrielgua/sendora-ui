<script setup lang="ts">
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
import Divider from '@/components/Divider.vue';
import Input from '@/components/forms/Input.vue';
import InputGroup from '@/components/forms/InputGroup.vue';
import Icon from '@/components/Icon.vue';
import MetricCard from '@/components/MetricCard.vue';
import Modal from '@/components/Modal.vue';
import PageTitle from '@/components/PageTitle.vue';
import { ChartColumnDecreasing, Copy, Eye, FolderKanban, Globe, Key, Mail, RotateCcw, Trash2, TriangleAlert } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const projectId = ref<string>('');

onMounted(() => {
  projectId.value = route.params.projectId as string;
});

const stats = ref([
  { label: 'E-mails Enviados', value: '128,432', icon: 'Send', trend: '12%', trendUp: true },
  { label: 'Taxa de Entrega', value: '99.2%', icon: 'ShieldCheck', trend: '0.1%', trendUp: true },
]);

const domains = ref<string[]>(['dominio.com.br', 'mydomain.com']);

const removeDomain = (domain: string) => {
  domains.value = domains.value.filter(d => d !== domain);
};

const showDeactivateProjectModal = ref(false);

const deactivateProject = () => {
  console.log('Desativar projeto')
  showDeactivateProjectModal.value = false;
}

const showDeleteProjectModal = ref(false);
const deleteProject = () => {
  console.log('Excluir projeto')
  showDeleteProjectModal.value = false;
}

</script>

<template>
  <Container tag="main" class="space-y-8">
    <PageTitle class="mb-5 md:mb-6 lg:mb-8">
      <template #title>
        Gerenciar Projeto
      </template>
      <template #subtitle>
        Gerencie as configurações, chaves de API e domínios do projeto <strong>{{ projectId }}</strong>.
      </template>
    </PageTitle>


    <section class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <MetricCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
    </section>
    <Divider />

    <section class="space-y-5">
      <Card>
        <template #title>Informações Gerais</template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputGroup inputId="name">
              <template #label>
                Nome do Projeto
              </template>
              <template #input>
                <Input id="name" type="text" placeholder="Digite o nome do projeto" :icon-start="FolderKanban" />
              </template>
            </InputGroup>

            <InputGroup inputId="destinationEmail">
              <template #label>
                Email de Destino
              </template>
              <template #input>
                <Input id="destinationEmail" type="email" placeholder="Digite o email de destino" :icon-start="Mail" />
              </template>
            </InputGroup>
          </div>
        </template>
      </Card>

      <Card>
        <template #title-icon>
          <Icon :icon="ChartColumnDecreasing" class="text-zinc-400 dark:text-zinc-500" />
        </template>
        <template #title>Status Do Projeto</template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex items-center gap-3">
              <div class="h-3 w-3 rounded-full bg-success"></div>
              <p class="text-sm text-success bg-success/10 px-3 py-1 rounded-full">
                Ativo
              </p>
            </div>
            <Button variant="outline" size="sm" @click="showDeactivateProjectModal = true">Desativar</Button>
          </div>
        </template>
      </Card>

      <Card>
        <template #title-icon>
          <Icon :icon="Globe" class="text-zinc-400 dark:text-zinc-500" />
        </template>
        <template #title>Whitelist de Domínios</template>
        <template #content>
          <div class="space-y-5">
            <div class="space-y-3">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                Adicione os domínios que podem ser usados para enviar e-mails através deste projeto.
              </p>
              <InputGroup inputId="domain" class="flex-1">
                <template #label>
                  Novo Domínio
                </template>
                <template #input>
                  <Input id="domain" type="text" placeholder="Digite o domínio (ex: example.com)" :icon-start="Globe" />
                </template>
              </InputGroup>
            </div>
            <Divider />
            <div class="space-y-3">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                Domínios atualmente na whitelist:
              </p>
              <ul class="space-y-2 text-zinc-800 dark:text-zinc-200 text-sm">
                <li v-for="domain in domains" :key="domain"
                  class="flex items-center justify-between p-2 ps-4 bg-secondary dark:bg-background-dark rounded-2xl">
                  {{ domain }}
                  <Button variant="ghost" size="icon" @click="removeDomain(domain)"
                    class="text-danger! hover:bg-danger/10! border-danger/10!">
                    <Icon :icon="Trash2" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </Card>

      <Card>
        <template #title-icon>
          <Icon :icon="Key" class="text-zinc-400 dark:text-zinc-500" />
        </template>
        <template #title>Chaves de API</template>
        <template #right-title-content>
          <Button variant="ghost" size="sm">
            <Icon :icon="RotateCcw" />
            Gerar Nova Chave
          </Button>
        </template>
        <template #content>
          <div class="space-y-3">
            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              Gerencie as chaves de API para este projeto. Você pode criar novas chaves, revogar chaves existentes e
              visualizar as chaves ativas.
            </p>
            <div class="flex items-center justify-between bg-secondary dark:bg-background-dark rounded-2xl p-4">
              <p class="text-ghost">*******************</p>

              <div class="flex items-center ml-auto">
                <Button variant="ghost" size="icon">
                  <Icon :icon="Eye" :size="16" class="text-ghost" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon :icon="Copy" :size="16" class="text-ghost" />
                </Button>
              </div>
            </div>
            <div class="p-3 bg-warning/10 rounded-xl flex items-center flex-wrap gap-3">
              <Icon :icon="TriangleAlert" :size="16" class="text-warning shrink-0" />
              <p class="text-sm text-warning">
                <strong>Atenção</strong>: Revele ou copie suas chaves de API apenas quando necessário. Nunca compartilhe
                suas chaves de API publicamente ou com pessoas não autorizadas.
              </p>
            </div>
          </div>
        </template>
      </Card>

      <Card>
        <template #title-icon>
          <Icon :icon="TriangleAlert" class="text-danger" />
        </template>
        <template #title>Zona Crítica</template>
        <template #content>
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              A exclusão do projeto é permanente e não pode ser desfeita. Todos os dados serão perdidos.
            </p>
            <Button variant="danger" @click="showDeleteProjectModal = true">
              <Icon :icon="Trash2" :size="16" class="me-2" />
              Excluir Projeto
            </Button>
          </div>
        </template>
      </Card>
    </section>
  </Container>

  <Modal :show="showDeactivateProjectModal" variant="warning" @on-close="showDeactivateProjectModal = false"
    @on-confirm="deactivateProject()" confirm-text="Sim, desativar" cancel-text="Cancelar">
    <template #modal-title>Desativar Projeto?</template>
    <template #modal-content>
      <p>
        Tem certeza de que deseja desativar este projeto?
        <span class="font-semibold text-text! dark:text-text-dark!">
          Não se preocupe
        </span>, essa ação pode ser desfeita a qualquer momento.
      </p>
    </template>
  </Modal>

  <Modal :show="showDeleteProjectModal" variant="danger" @on-close="showDeleteProjectModal = false"
    @on-confirm="deleteProject()" confirm-text="Sim, excluir" cancel-text="Cancelar">
    <template #modal-title-icon>
      <Icon :icon="TriangleAlert" class="text-danger" />
    </template>
    <template #modal-title>Excluir Projeto?</template>
    <template #modal-content>
      <p>
        Tem certeza de que deseja excluir este projeto?
        <span class="font-semibold text-text! dark:text-text-dark!">
          Esta ação não pode ser desfeita.
        </span>
      </p>
    </template>
  </Modal>
</template>