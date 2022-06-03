import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import DonatePage from '../views/Donate.vue'
import ResourcesPage from '../views/Resources.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonatePage
  },
  {
    path: '/resources',
    name: 'Resources',
    component: ResourcesPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomePage
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router