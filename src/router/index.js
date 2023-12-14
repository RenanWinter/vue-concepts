import { createRouter, createWebHistory } from 'vue-router'
import SlotsView from '../views/SlotsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/slots',
      name: 'slots',
      component: SlotsView
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/fundamentals',
      name: 'fundamentals',
      component: () => import('../views/BasicoView.vue'),
    },
    {
      path: '/user/cadastrar',
      name: 'newuser',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/user/:id/editar',
      name: 'user',
      component: () => import('../views/UserView.vue'),
    },
    {path: '/', redirect: '/slots'}
    
  ]
})

export default router
