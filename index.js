import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Result from '../views/Result.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/main', component: Main },
  { path: '/result', component: Result }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
