import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "home" */ '../views/Members.vue')
  },
  {
    path: '/extras',
    name: 'extras',
    component: () => import(/* webpackChunkName: "home" */ '../views/Extras.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
