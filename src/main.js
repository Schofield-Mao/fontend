import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import './plugins/element.js'
import router from './plugins/router'
import Axios from './plugins/axios'
Vue.config.productionTip = false

// new Vue({
//   router,
//   Axios,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  router,
  Axios,
  render: h => h(App),
}).$mount('#app')