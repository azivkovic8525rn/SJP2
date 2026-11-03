import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Gallery from '@/views/Gallery.vue'
import Image from '@/views/Image.vue'
import Draw from '@/views/Draw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/gallery/:id',
      name: 'image',
      component: Image
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    }
  ],
})

export default router
