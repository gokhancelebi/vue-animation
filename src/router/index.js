import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singleElementAnimation',
      component: () => import('../views/SingleElementView.vue')
    },
    {
      path: '/group',
      name: 'groupElementAnimation',
      component: () => import('../views/GroupView.vue')
    },
    {
      path: '/home',
      name: 'homePage',
      component: () => import('../views/HomePageView.vue')
    },
    {
      path: '/about',
      name: 'aboutPage',
      component: () => import('../views/AboutPageView.vue')
    }
  ] 
})

export default router