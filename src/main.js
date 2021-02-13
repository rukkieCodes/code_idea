import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#' + Math.random().toString().slice(2,8)
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
