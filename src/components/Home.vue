<template>
  <div class=" bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100">

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <h1 class="text-2xl font-bold tracking-tight">Meus Projetos</h1>
          <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Gerencie suas chaves de API e domínios.</p>
        </div>
        <Button>
          <Plus class="h-4 w-4 mr-2" />
          Novo Projeto
        </Button>



      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.id"
          class="flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md ">
          <div>
            <div class="mb-4 flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                  <Globe class="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <h2 class="text-base font-semibold">{{ project.name }}</h2>
                  <span class="text-sm text-zinc-500 dark:text-zinc-400">{{ project.domain }}</span>
                </div>
              </div>
            </div>

            <div class="mt-4 rounded-lg bg-zinc-50 dark:bg-zinc-950 p-3 border border-zinc-100 dark:border-zinc-800">
              <div class="mb-1.5 flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  API Key
                </span>
                <button @click="project.showKey = !project.showKey"
                  class="text-[10px] font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-1 transition-colors">
                  <Eye v-if="!project.showKey" class="h-3 w-3" />
                  <EyeOff v-else class="h-3 w-3" />
                  {{ project.showKey ? 'Ocultar' : 'Revelar' }}
                </button>
              </div>

              <div class="flex items-center gap-2">
                <div class="flex-1 font-mono text-sm overflow-hidden">
                  <span v-if="project.showKey" class="text-zinc-700 dark:text-zinc-300 break-all leading-tight">
                    {{ project.apiKey }}
                  </span>
                  <span v-else class="text-zinc-300 dark:text-zinc-600 tracking-tighter">
                    ••••••••••••••••••••••••••••••••
                  </span>
                </div>

                <button @click="copyToClipboard(project.apiKey, project.id)"
                  class="rounded p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Check v-if="copiedId === project.id" class="h-4 w-4 text-emerald-500" />
                  <Copy v-else class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <span class="text-xs text-zinc-400">Criado em {{ project.createdAt }}</span>
            <button
              class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:opacity-70">
              Configurações
            </button>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Check,
  Copy,
  Eye, EyeOff,
  Globe,
  Plus
} from '@lucide/vue'
import { reactive, ref } from 'vue'
import Button from './Button.vue'



interface Project {
  id: string
  name: string
  domain: string
  apiKey: string
  createdAt: string
  showKey: boolean // Estado para controlar a visibilidade individual
}

// Usando reactive para que a propriedade showKey seja reativa na listagem
const projects = reactive<Project[]>([
  {
    id: 'proj_1',
    name: 'NWX Group',
    domain: 'nwxgroup.com',
    apiKey: 'mk_live_8f7d9a0b1c2e3f4g5h6i7j8k9l0m1n2',
    createdAt: '23 Abr 2026',
    showKey: false
  },
  {
    id: 'proj_2',
    name: 'Landing Page Evento',
    domain: 'evento.nwxgroup.com',
    apiKey: 'mk_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p',
    createdAt: '15 Abr 2026',
    showKey: false
  }
])

const copiedId = ref<string | null>(null)

const copyToClipboard = async (text: string, id: string) => {
  await navigator.clipboard.writeText(text)
  copiedId.value = id
  setTimeout(() => {
    if (copiedId.value === id) copiedId.value = null
  }, 2000)
}
</script>

<style></style>