import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import TabsPage from '../views/TabsPage.vue'

const routes = [
  
  
  {
    path: '/',
    component: TabsPage,
    children: [
      
      {
        path: 'home',
        component: HomePage
      },
      
      {
        path: 'tests',
        component: () => import('@/views/TestsPage.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
      },

      {
        path: '/test/:id',
        name:"test",
        component: () => import('@/views/TestPage.vue')
      },
    ],
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
