const path = require('path');
const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const dist = path.resolve(__dirname, '..', 'dist');
const template = fs.readFileSync(path.resolve(dist, 'template.html'), 'utf-8');
const serverBundle = require(path.resolve(dist, 'vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(dist, 'vue-ssr-client-manifest.json'));

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});

const app = express();

app.use(express.static(dist));

app.get('*', async (req, res) => {
  const { url } = req;
  try {
    const html = await renderer.renderToString({ url });
    res.send(html);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).end();
  }
});

app.listen(9000, () => {
  console.info('Server started');
});