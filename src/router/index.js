// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DisasterPage from '@/components/DisasterPage.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'disaster',
    component: DisasterPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
