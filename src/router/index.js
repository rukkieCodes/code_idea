import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/our_works',
    name: 'Our_woks',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/contact_us',
    name: 'Conteact',
    component: () => import('../views/Conteact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    children: [{
      path: '',
      name: 'Our_services',
      component: () => import('../views/Our_services.vue'),
    }, {
      path: 'design_graphic_design',
      name: 'Design_graphic_design',
      component: () => import('../views/Design_graphic_design.vue'),
    }]
  },
  {
    path: '*',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router