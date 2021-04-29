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
  },
  {
    path: '/posts/create',
    name: 'createPost',
    meta: {
      middleware: [
        auth
      ]
    },
    component: () => import('@/views/post/Create.vue')
  },
  {
    path: '/posts/:postSlug',
    name: 'post',
    meta: {
      middleware: [
        auth
      ]
    },
    props: true,
    component: () => import('@/views/post/{slug}.vue')
  }
]
