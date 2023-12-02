import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/App/Beranda.vue'
import Task from '@/Pages/App/Task.vue'
import Cuti from '@/Pages/App/Cuti.vue'
import Absensi from '@/Pages/App/Absensi.vue'
import Login from '@/pages/Auth/Login.vue'
import { useStore } from '@/Store/modules'

const routes = [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
    path: '/login',
    component:Login
    },
    {
      path:'/Task',
      name:'Task',
      component:Task
    },
    {
      path:'/Absensi',
      name:'Absensi',
      component:Absensi
    },
    {
      path:'/Cuti',
      name:'Cuti',
      component:Cuti
    }

   
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  router.beforeEach((to, from, next) => {
    const store = useStore()

    const Login = store.authStore.isLogin;
    // const Login = true;
    if (to.path !== '/login' && !Login) {
      next('/login'); 
    } else {
      next();  
    }
  });
  
  
  export default router
  
