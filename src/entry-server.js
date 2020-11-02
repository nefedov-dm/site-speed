import createApp from '@/app.js';

export default ({ url }) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    router.push(url);

    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
