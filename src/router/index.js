import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: () => import('../views/UI-kit.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    children: [
      {
        path: '/start',
        name: 'start',
        component: () => import('../views/StartView.vue')
      },
      {
        path: '/stock',
        name: 'stock',
        component: () => import('../views/StartView.vue')
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('../views/StartView.vue')
      },
      {
        path: '/wallet',
        name: 'wallet',
        component: () => import('../views/StartView.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/StartView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
