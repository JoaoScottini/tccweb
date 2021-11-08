import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import(/* webpackChunkName: "navbar" */ '../views/assets/Navbar.vue')
  },
  {
    path: '/profile',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "navbar" */ '../views/profile/Profile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router