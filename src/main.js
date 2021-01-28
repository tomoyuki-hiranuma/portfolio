import Vue from 'vue';
import App from './App.vue';
import './assets/index.css';

Vue.config.productionTip = false;
let VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
