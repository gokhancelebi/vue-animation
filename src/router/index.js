import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SingleElementView.vue')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/GroupView.vue')
    }
  ] 
})

export default router