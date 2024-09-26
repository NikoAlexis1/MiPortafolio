import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/AcercaDeMi',
      name: 'AcercaDeMi',
      component: () => import('../views/AcercaDeMiView.vue')
    },
    {
      path: '/MisProyectos',
      name: 'MisProyectos',
      component: () => import('../views/MisProyectosView.vue')
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ]
})

export default router
