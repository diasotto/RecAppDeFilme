
import { createRouter, createWebHistory } from 'vue-router'
import testPage from '@/views/testPage.vue'


const routes = [
  {
    path: '/',
    redirect: '/Welcome'
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: () => import('../views/WelcomePage.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('@/views/MoviesPage.vue')
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: () => import('@/views/MovieDetailsPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router