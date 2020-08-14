import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/404'
import Login from '../views/Login'
import Register from '../views/Register'

import GetDocTest from "@/views/edit/GetDocTest";


import api from '@/http/api'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Index",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requireAuth: false
      },
      children: [
        {
          path: '/personalinformation',
          name: 'PersonalInformation',
          component: () => import('../views/userInfo/PersonalInformation'),
          meta: {
            isLogin: false
          }
        },
        {
          path: '/revising',
          name: 'Revising',
          component: () => import('../views/userInfo/Revising'),
          meta: {
            isLogin: false
          }
        },
        {
          path: '/documentList',
          name: 'DocumentList',
          component: () => import('../views/DocumentList'),
          meta: {
            isLogin: false
          }
        },
        {
          path:'/groupdocumentlist',
          name:'GroupDocumentList',
          component: () => import('../views/GroupDocumentList'),
          meta:{
            isLogin:false
          }
        },
        {
          path:'/groupmember',
          name:'GroupMember',
          component: ()=>import('../views/GroupMember'),
          meta:{
            isLogin:false
          }
        },
        {
          path: '/grouplist',
          name: 'GroupList',
          component: () => import('../views/GroupList'),
          meta:{
            isLogin:false
          }
        },
        {
          path: '/trash',
          name: 'Trash',
          component: () => import('../views/Trash'),
          meta:{
            isLogin:false
          }
        },
        {
          path: '/doceditor',
          name: 'DocEditor',
          component: () => import('../views/edit/DocEditor'),
          meta:{
            isLogin:false
          }
        }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/getdoctest',
      name: 'GetDocTest',
      component: () => import('../views/edit/GetDocTest')
    },
    {
      path: '/docview',
      name: 'DocView',
      component: () => import('../views/edit/DocView')
    },
    {
      path: '/noauthority',
      name: 'NoAuthority',
      component: () => import('../views/edit/NoAuthority')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let username = sessionStorage.getItem('username')
//   if (to.path === '/login') {
//     // 访问登录界面
//     if(username) {
//       // 已登录
//       next({ path: '/'})
//     } else {
//       next()
//     }
//   } else {
//     // 访问非登陆界面
//     if (!username) {
//       next({ path: '/login'})
//     } else {
//       next()
//     }
//   }
// })

export default router
