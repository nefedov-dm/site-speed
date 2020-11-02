const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const HtmlWebpackPligin = require('html-webpack-plugin');

const template = path.resolve(__dirname, 'src', 'index.html');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, 'src', 'entry-client.js'),
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPligin({
      filename: 'template.html',
      template,
      cache: false,
      inject: false,
    }),
  ],
});
