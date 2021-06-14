import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const CharactersPage = () =>
  import('../components/templates/CharactersTemplate.vue');

const routes = [
  { path: '/', component: CharactersPage, name: 'characterPage' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
