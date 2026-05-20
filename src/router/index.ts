import { useAuthStore } from '@/stores/auth.store'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { hideLayout: true },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/projects',
      name: 'Projetos',
      component: () => import('../views/ProjectsView.vue'),

      meta: {
        breadcrumb: [
          {
            name: 'Projetos',
            path: '/projects',
          },
        ],
      },
    },

    {
      path: '/projects/:projectId',
      name: 'Gerenciar Projeto',
      component: () => import('../views/ManageProjectView.vue'),

      meta: {
        breadcrumb: (route: any) => [
          {
            name: 'Projetos',
            path: '/projects',
          },
          {
            name: `#${route.params.projectId.toString().toUpperCase()}`,
            path: '',
          },
        ],
      },
    },

    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

//redirects user based on authentication status
router.beforeEach(async (to, _, next) => {
  const authRoutes = ['/login', '/register']

  const authStore = useAuthStore()

  if (!authRoutes.includes(to.path) && !authStore.isAuthenticated) {
    next('/login')
  } else if (authRoutes.includes(to.path) && authStore.isAuthenticated) {
    next('/home')
  } else next()
})

export default router
