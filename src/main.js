import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue'


Vue.use(VueRouter);

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


const router = new VueRouter ({
	routes
	
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
