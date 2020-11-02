const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const baseConfig = require('./webpack.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, 'src', 'entry-server.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals(),
  plugins: [
    new VueSSRServerPlugin(),
  ],
});
