import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Allstudents from '../views/Allstudents.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allstudents',
    name: 'Allstudents',
    component: Allstudents
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Allstudents.vue')
  },
  {
    path: '/admission',
    name: 'Admission',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admission.vue')
  },
  {
    path: '/add-course',
    name: 'Add-Course',
    component: () => import('../views/Add-Course.vue')
  },
  {
    path:'/courses',
    name:'Courses',
    component: () => import('../views/Courses.vue')
  },
  
  {
    path: '/add-batch',
    name: 'Add-Batch',
    component: () => import('../views/Add-Batch.vue')
  },

  {
    path: '/batches',
    name: 'Batches',
    component: () => import('../views/Batches.vue')
  },
  //testing purpose
  {
    path: '/course-select',
    name: 'course-select',
    component: () => import('../components/Course-Select.vue')
  }//
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
