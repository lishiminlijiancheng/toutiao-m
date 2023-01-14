import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   // {
   //    path:'/',
   //    component: () => import('../views/login/index2.vue')
   // },
   // {
   //    redirect:'/layout1/manage',
   //    path:'/layout1',
   //    component: () => import('../views/layout/index2.vue'),
   //    children:[
   //       {
   //          path:'manage',
   //          name:'manage1',
   //          component: () => import('../views/manage/index1.vue')
   //       },
   //       {
   //          path:'my',
   //          name:'my',
   //          component:()=>import('@/views/my/index1.vue')
   //       }
   //    ]
   // },
   // {
   //    name:'layout2',
   //    redirect:'/layout2/manage',
   //    path:'/layout2',
   //    component: () => import('../views/layout/index3.vue'),
   //    children:[
   //       {
   //          path:'manage',
   //          name:'manage2',
   //          component: () => import('../views/manage/index2.vue')
   //       },
   //       {
   //          path:'my',
   //          name:'my',
   //          component:()=>import('@/views/my/index1.vue')
   //       }
   //    ]
   // },
   // {
   //    name:'layout3',
   //    redirect:'/layout3/manage',
   //    path:'/layout3',
   //    component: () => import('../views/layout/index4.vue'),
   //    children:[
   //       {
   //          path:'manage',
   //          name:'manage3',
   //          component: () => import('../views/manage/index3.vue')
   //       },
   //       {
   //          path:'my',
   //          name:'my',
   //          component:()=>import('@/views/my/index1.vue')
   //       }
   //    ]
   // },


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
