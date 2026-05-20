<script setup lang="ts">
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
import Divider from '@/components/Divider.vue';
import Input from '@/components/forms/Input.vue';
import InputGroup from '@/components/forms/InputGroup.vue';
import Icon from '@/components/Icon.vue';
import Logo from '@/components/Logo.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import FadeInOutTransition from '@/components/transitions/FadeInOutTransition.vue';
import { useAuthStore } from '@/stores/auth.store';
import { AlertCircle, Lock, Mail } from '@lucide/vue';
import { ref } from 'vue';

const authentication = ref({
  email: '',
  password: ''
});

const authStore = useAuthStore();


const authenticate = () => {
  authStore.authenticate(authentication.value.email, authentication.value.password);
  authentication.value.password = '';
}

</script>

<template>
  <Container class="space-y-6 mt-24 max-w-xl">
    <div class="flex items-center justify-between">
      <Logo class="justify-center" />
      <ThemeSwitcher />
    </div>

    <Card class="transition-all">
      <template #content>
        <FadeInOutTransition>
          <Card v-if="authStore.state.error"
            class="mb-4 border-danger/20! dark:border-danger/10! bg-danger/20! dark:bg-danger/10!">
            <template #content>
              <div class="flex items-center gap-3 text-sm">
                <Icon :icon="AlertCircle" :size="16" class="text-danger!" />
                <h2 class="text-danger/80!">{{ authStore.state.error }}</h2>
              </div>
            </template>
          </Card>
        </FadeInOutTransition>
        <form @submit.prevent="authenticate()" class="space-y-4">
          <SectionTitle class="max-w-">
            <template #title>Faça seu Login</template>
            <template #subtitle>
              Faça login para acessar o painel de controle e gerenciar seus envios de e-mails.
            </template>
          </SectionTitle>
          <Divider />
          <InputGroup inputId="email">
            <template #label-icon>
              <Icon :icon="Mail" :size="16" class="text-zinc-400 dark:text-secondary-dark" />
            </template>
            <template #label>E-mail</template>
            <template #input>
              <Input id="email" type="email" placeholder="Digite seu e-mail" v-model="authentication.email" required />
            </template>
          </InputGroup>
          <InputGroup inputId="password">
            <template #label-icon>
              <Icon :icon="Lock" :size="16" class="text-zinc-400 dark:text-secondary-dark" />
            </template>
            <template #label>Senha</template>
            <template #input>
              <Input id="password" type="password" placeholder="Digite sua senha" v-model="authentication.password"
                required />
            </template>
          </InputGroup>
          <Divider />
          <div class="space-y-2">
            <Button type="submit" class="w-full" :loading="authStore.state.loading">
              {{ authStore.state.loading ? 'Autenticando...' : 'Entrar' }}
            </Button>
            <RouterLink to="/register">
              <Button variant="outline" class="w-full" :disabled="authStore.state.loading">
                Não tem uma conta? Cadastre-se
              </Button>
            </RouterLink>
          </div>
        </form>
      </template>
    </Card>
  </Container>

</template>