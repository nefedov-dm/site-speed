import Vue from 'vue';
import Router from 'vue-router';
import TheHome from '@components/TheHome';
import TheLongGrid from '@components/TheLongGrid';

Vue.use(Router);

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [
      { path: '/', component: TheHome },
      { path: '/ten-thousand-nodes', component: TheLongGrid },
    ],
  });

export default createRouter;
