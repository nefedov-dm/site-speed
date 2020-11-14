import createApp from '@/app.js';

const container = document.getElementById('app');
const { app, router } = createApp();

// fp, fcp
const [fp, fcp] = window.performance.getEntriesByType('paint');

console.log('FP:', fp.startTime + fp.duration);
console.log('FCP:', fcp.startTime + fcp.duration);

// fmp
const [fmp] = window.performance.getEntriesByName('fmp');

console.log('FMP:', fmp.startTime + fmp.duration);

// render body
const renderBody = window.performance.measure(
  'start_render_body',
  'finish_render_body'
);

console.log('Render Body:', renderBody.duration);

// tti
const LONG_TASK_TIMEOUT = 3000;
const tasks = [];
const observer = new window.PerformanceObserver((observerEntry) => {
  observerEntry.getEntries().forEach((item) => {
    tasks.push(item.startTime + item.duration);
  });
});

observer.observe({ type: 'layout-shift', buffered: true });

const check = () => {
  const lastTask = tasks[tasks.length - 1];
  if (lastTask && window.performance.now() - lastTask > LONG_TASK_TIMEOUT) {
    console.log('LS:', lastTask);
  } else {
    setTimeout(check, LONG_TASK_TIMEOUT);
  }
};

check();

router.onReady(() => {
  app.$mount(container);
  window.performance.mark('fi');
});

// TODO: window.performance
// const [fmp] = window.performance.getEntriesByName('fmp');
// const [renderTime] = window.performance.getEntriesByName('finish_render');
// const [fp, fcp] = window.performance.getEntriesByType('paint');

// console.log(fmp);
// console.log(renderTime);

// console.log(fp);
// console.log(fcp);

// TODO: window.PerformanceObserver
// tti-polyfill
// const LONG_TASK_TIME = 3000;
// const longTasks = [];
// const observer = new window.PerformanceObserver((tasks) => {
//   const entries = tasks.getEntries();
//   entries.forEach(({ startTime, duration }) => {
//     longTasks.push(Math.round(startTime + duration));
//   });
//   console.log('Long tasks times: ', longTasks);
// });

// observer.observe({ type: 'longtask', buffered: true });

// const check = () => {
//   const lastTime = longTasks[longTasks.length - 1];
//   if (lastTime && performance.now() - lastTime > LONG_TASK_TIME) {
//     console.log('TTI: ', lastTime);
//   } else {
//     setTimeout(check, LONG_TASK_TIME);
//   }
// };

// check();
