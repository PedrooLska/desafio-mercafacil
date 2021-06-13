import Vue from 'vue';
import VueRouter from 'vue-router';

import CharactersPage from '../components/pages/CharactersPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CharactersPage, name: 'CharactersPage' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
