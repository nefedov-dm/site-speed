import createApp from '@/app.js';

const container = document.getElementById('app');
const { app, router } = createApp();

router.onReady(() => {
  app.$mount(container);
});

