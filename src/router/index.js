import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Profile from '@/views/ProfileView.vue'
// import Wallet from ''
import Portfolio from '@/views/PortfolioView.vue'
// import Stock from '@/views/StartView.vue'
import Start from '@/views/StartView.vue'
import Main from '@/views/MainView.vue'
import Forgot from '@/views/forgotPasswordView.vue'
import NotFound404 from '@/views/NoFoundViews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/profile'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound404,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: () => import('../views/UI-kit.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/start',
        name: 'start',
        meta: {
          requiresAuth: true
        },
        component: Start
      },
      // {
      //   path: '/stock',
      //   name: 'stock',
      //   meta: {
      //     requiresAuth: true
      //   },
      //   component: Stock
      // },
      {
        path: '/portfolio',
        name: 'portfolio',
        meta: {
          requiresAuth: true
        },
        component: Portfolio
      },
      // {
      //   path: '/wallet',
      //   name: 'wallet',
      //   meta: {
      //     requiresAuth: true
      //   },
      //   component: Wallet
      // },
      {
        path: '/profile',
        name: 'profile',
        meta: {
          requiresAuth: true
        },
        component: Profile
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else next()
})

export default router
