import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

   {  
      path:'/login',
      name:'login',
      component:()=>import('@/views/login/index.vue')
   },
   {
      path:'/',
      redirect:'/login'
   }
 
]

const router = new VueRouter({
   mode:'history',
   routes
})

export default router
