import Vue from 'vue';
import App from './App.vue';
import './assets/index.css';

Vue.config.productionTip = false;
let VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

/* eslint-disable */

new Vue({
  render: (h) => h(App),
}).$mount('#app');
