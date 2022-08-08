import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    
   
    component: () => import('../views/AboutView.vue')
  },
  
  {
    path: '/resume',
    name: 'resume',
    
    
    component: () => import( '../views/ResumeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    
    
    component: () => import( '../views/ProjectsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    
    
    component: () => import( '../views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
