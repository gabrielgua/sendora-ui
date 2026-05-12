import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', name: 'home', component: () => import('../views/HomeView.vue') },
    {
      path: '/projects',
      name: 'Projetos',
      component: () => import('../views/ProjectsView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

export default router
