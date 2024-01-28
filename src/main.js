import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



Vue.component('menu-icon', MenuIcon);


import VueTailwind from 'vue-tailwind'
// SwiperCore.use([Navigation, Pagination]);



import './assets/tailwind.css'
const components = {
  //...
}


Vue.use(VueTailwind, components)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
