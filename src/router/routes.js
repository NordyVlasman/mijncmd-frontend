import auth from '../middleware/auth'
import guest from '../middleware/guest'

export default [
  {
    path: '/',
    name: 'welcome',
    meta: {
      middleware: [
        auth
      ]
    },
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/auth/login',
    name: 'login',
    meta: {
      middleware: [guest],
      layout: 'auth-layout'
    },
    component: () => import('@/views/auth/Login.vue')
  },

  {
    path: '/auth/register',
    name: 'register',
    meta: {
      middleware: [guest],
      layout: 'auth-layout'
    },
    component: () => import('@/views/auth/Register.vue')
  }
]
