import Vue from "vue";
import VueRouter from "vue-router";
//引入路由组件
import MainIndex from '@/views/MainIndex.vue'
import UserIndex from '@/views/user/UserIndex'
import homeIndex from '@/views/home/homeIndex'
import MallIndex from '@/views/mall/MallIndex'
import other2Index from '@/views/other/otherIndex2'
import other1Index from '@/views/other/otherIndex1'
import Login from '@/views/login/LoginIndex.vue'


Vue.use(VueRouter)
//配置路由组件
const router =  new VueRouter({
  mode:'history',
  routes:[
      //主页配置
    {path:'/',name:'Main',redirect:'/home',component:MainIndex,
    //子路由主要是内容区的变化
    children:[
      {
      path:'home',
      name:'home',
      component:homeIndex
      },
      {
        path:'user',
        name:'user',
        component:UserIndex
      },
      {
        path:'mall',
        name:'mall',
        component:MallIndex
      },
      {
        path:'other1',
        name:'page1',
        component:other1Index
      },
      {
        path:'other2',
        name:'page2',
        component:other2Index
      }
    ]
    },
  {
    path:'/login',
    name:'login',
    component:Login
  }
  ]
})
//暴露配置
export default router
