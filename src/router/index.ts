import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import LanguageView from '@/Views/LanguageView.vue'
import AlertView from '@/Views/AlertView.vue'




const routes = [
  {
    path :'/',
    name : 'home',
    component : HomeView
  },
  {
    path :'/Language',
    name : 'Language',
    component : LanguageView
  },
  {
    path :'/Alert',
    name : 'Alert',
    component : AlertView
  },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
