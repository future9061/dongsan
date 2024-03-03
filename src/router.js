import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/main/MainPage.vue'
import LoginPage from './components/login/LoginPage.vue'
import HomePage from './components/home/HomePage.vue'


const routes = [
  { path: '/home', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/products', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
