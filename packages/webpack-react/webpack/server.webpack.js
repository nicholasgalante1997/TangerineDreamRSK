const path = require('path')
const { merge } = require('webpack-merge');
const dotenv = require('dotenv')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')
const commonWebpackConfig = require('./common.webpack');

dotenv.config()

const serverWebpackConfig = {
  cache: false,
  entry: {
    'build-app': path.resolve(process.cwd(), 'src', 'build', 'build-app.tsx'),
  },
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), '.build-process'),
    filename: '[name].js'
  },
  target: 'node',
  node: {
    global: false
  },
  plugins: [
    new BundleStatsWebpackPlugin({ outDir: 'stats/webpack/server' })
  ]
}

module.exports = merge(commonWebpackConfig, serverWebpackConfig)
