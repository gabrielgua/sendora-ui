import { http } from '@/services/http'
import type { Project } from '@/types/project'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useAuthStore } from './auth.store'

export const useProjectStore = defineStore('project', () => {
  const PROJECTS_ENDPOINT = '/projects'
  const projects = ref<Project[]>([])
  const selectedProject = ref<Project | null>(null)
  const authStore = useAuthStore()
  const state = reactive({ loading: false, error: null as string | null })

  const fetchAuthenticatedUserProjects = async () => {
    try {
      state.loading = true
      const response = await http.get(
        `${PROJECTS_ENDPOINT}?userId=${authStore.authentication?.user?.id}`,
      )
      projects.value = response.data
    } catch (err) {
      state.error = 'Failed to fetch projects'
    } finally {
      state.loading = false
    }
  }

  const fetchProjectById = async (projectId: string) => {
    if (selectedProject.value?.id === projectId) {
      return
    }

    try {
      state.loading = true
      const response = await http.get(`${PROJECTS_ENDPOINT}/${projectId}`)
      selectedProject.value = response.data
      console.log('Fetched project:', selectedProject.value)
    } catch (err) {
      state.error = 'Failed to fetch project'
    } finally {
      state.loading = false
    }
  }

  return { projects, selectedProject, state, fetchAuthenticatedUserProjects, fetchProjectById }
})
