import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/style.css'

// import '@/assets/js/jquery-1.11.0.js'
// import jquery from 'jquery'

// import 'jquery'

// import Popper from '@/assets/js/popper.min.js'
// import Popper from 'Popper'
// import 'boostrap' from '@/assets/js/bootstrap.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
