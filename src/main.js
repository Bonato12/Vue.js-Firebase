import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table';
// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGoodTablePlugin);
Vue.use(VueRouter);
Vue.use(BootstrapVue);


import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)



const router = new VueRouter ({
	routes
});

new Vue({
  el: '#app',
  router,
  components: {
    Icon
  },
  render: h => h(App)
})
