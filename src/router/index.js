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
      path:'/search',
      component:()=>import('@/views/search/index.vue')

   },
   {
      name: 'article',
      path:'/article/:articleId',
      component:()=>import('@/views/article/index.vue'),
      props: true,//开启props传参，把路由参数映射到组件的props中

   },
  
   {
      path:'/',
      name:'layout',
      component:()=>import("@/views/layout/index.vue"),
      children:[
         {
            path:'',
            name:'home',
            component:()=>import("@/views/home/index.vue")
         },
         {
            path:'qu',
            name:'qu',
            component:()=>import('@/views/qu/index.vue')
         },
         {
            path:'video',
            name:'video',
            component:()=>import('@/views/video/index.vue')
         },
         {
            path:'my',
            name:'my',
            component:()=>import('@/views/my/index.vue')
         }
      ]
   }
 
]

const router = new VueRouter({
   mode:'hash',
   routes
})

export default router
