import Vue from 'vue';
import router from './router';
import apolloProvider from './vue-apollo';

import './assets/style/scss/style.scss';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
