import Vue from 'vue';
import TheApp from '@components/TheApp';
import createRouter from '@router';

const createApp = () => {
  const router = createRouter();

  const app = new Vue({
    router,
    render: (h) => h(TheApp),
  });

  return { app, router };
};

export default createApp;
