import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/entregar', component: () => import('@/views/entregarView.vue') },
  { path: '/ordenes', component: () => import('@/views/ordenesView.vue') },
  { path: '/', component: () => import('@/views/recogerView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router