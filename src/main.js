import Vue from 'vue';
import App from './App.vue';
import './assets/index.css';
import VueGTag from "vue-gtag";

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

Vue.use(VueGTag, {
  config: { id: "UA-199289393-3" }
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
