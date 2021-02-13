import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    routes: [{
        title: "Home",
        icon: "mdi-home",
        route: "/"
      },
      {
        title: "Our works",
        icon: "mdi-briefcase-variant",
        route: "/our_works",
      },
      {
        title: "Services",
        icon: "mdi-room-service",
        route: "/services"
      },
      {
        title: "Contact Us",
        icon: "mdi-card-account-phone",
        route: "/contact_us",
      },
      {
        title: "Blog",
        icon: "mdi-blogger",
        route: "/blog",
      },
    ],
  },

  getters: {
    routes: state => state.routes,
  },

  mutations: {},

  actions: {},
  modules: {}
})