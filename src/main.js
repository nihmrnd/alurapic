import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes'; //quando não se usa o export default se usa {}


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history' //para definir o index.html padrão
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
