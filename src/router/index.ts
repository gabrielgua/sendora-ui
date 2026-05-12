import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
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

export default router
