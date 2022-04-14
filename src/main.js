// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/global.scss';

import request from './utils/request.js';
Vue.prototype.$request = request

import './utils/filter'

// import store from './store';

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
Vue.use(VuePlyr, {
  plyr: {
   
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>'
})
