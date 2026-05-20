import { http } from '@/services/http'
import type { ApiError } from '@/types/api-error'
import type { Authentication } from '@/types/authentication'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const AUTH_ENDPOINT = '/auth'
  const USER_ENDPOINTS = '/users'

  const authentication = ref<Authentication>()
  const state = reactive({ loading: false, error: null as string | null })

  const isAuthenticated = computed(() => !!authentication.value?.token)

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const authenticate = async (email: string, password: string) => {
    try {
      state.loading = true
      state.error = null
      await delay(500) // Simula um atraso para melhorar a experiência do usuário
      const res = await http.post(`${AUTH_ENDPOINT}/authenticate`, { email, password })

      saveAuthentication(res.data.token)

      await authenticateUser()
      router.push('/home')
    } catch (err) {
      handleError(err as AxiosError<ApiError>)
    } finally {
      state.loading = false
    }
  }

  const authenticateUser = async () => {
    if (!authentication.value || !authentication.value.token) return

    try {
      const res = await http.get(`${USER_ENDPOINTS}/me`)
      authentication.value.user = res.data
    } catch (err) {
      handleError(err as AxiosError<ApiError>)
      throw err
    } finally {
      state.loading = false
    }
  }

  const initialize = async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      router.push('/login')
      return
    }

    saveAuthentication(token)
    try {
      await authenticateUser()
    } catch (err) {
      logout()
    }
  }

  const saveAuthentication = (token: string) => {
    authentication.value = { token }
    localStorage.setItem('accessToken', authentication.value.token)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    authentication.value = undefined
    router.push('/login')
  }

  const handleError = (err: AxiosError<ApiError>) => {
    var error = err.response?.data as ApiError

    state.error = 'Erro ao autenticar, tente novamente mais tarde.'
    console.log(error)

    if (error.error === 'UNAUTHORIZED') {
      state.error = 'Credenciais inválidas, tente novamente.'
      return
    }

    if (error.error === 'TOKEN_EXPIRED') {
      state.error = 'Sua sessão expirou, por favor, faça login novamente.'
      return
    }
  }

  return { authentication, state, authenticate, logout, initialize, isAuthenticated }
})
