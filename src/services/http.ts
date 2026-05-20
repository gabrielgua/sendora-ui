import { useAuthStore } from '@/stores/auth.store'
import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
})

const PUBLIC_API_ENDPOINTS = ['/auth/login', '/auth/register']

http.interceptors.request.use((config) => {
  if (PUBLIC_API_ENDPOINTS.some((endpoint) => config.url?.includes(endpoint))) {
    return config
  }

  const authStore = useAuthStore()
  const token = authStore.authentication?.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
