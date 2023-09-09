const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')
const commonWebpackConfig = require('./common.webpack')

dotenv.config()

function getBundleName(filename) {
  const fileNameSplit = filename.split('.')
  if (fileNameSplit.length === 0) {
    throw new Error('TANGERINEDREAM:::WEBPACKEXCEPTION => FILENAME PARSING ISSUE')
  }
  return fileNameSplit[0]
}

function getEntryObject() {
  const clientScriptsDirectoryPath = path.resolve(process.cwd(), 'src', 'client-scripts')
  let dirContents = fs.readdirSync(clientScriptsDirectoryPath, { encoding: 'utf-8' })
  const staticEntryPointsRegExp = /.*([\.static-entrypoint\.]{1}).tsx/g
  if (dirContents.length < 1) {
    throw new Error('TANGERINEDREAM:::WEBPACKEXCEPTION => ENTRYPOINTS DIRECTORY MISSING')
  }

  /** Map files to entry objects */
  let entryObject = {}

  function filterNonStaticEntrypoints(file) {
    return staticEntryPointsRegExp.test(file)
  }

  dirContents = dirContents.filter(filterNonStaticEntrypoints)

  for (const file of dirContents) {
    Object.assign(entryObject, {
      [getBundleName(file)]: path.resolve(clientScriptsDirectoryPath, file)
    })
  }

  return entryObject
}

const browserWebpackConfig = {
  cache: false,
  mode: 'production',
  entry: getEntryObject(),
  target: ['web', 'es2017'],
  output: {
    clean: false,
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    fallback: {
      path: false,
      process: false,
      fs: false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new BundleStatsWebpackPlugin({ outDir: 'stats/webpack/client/bundles' })
  ]
}

module.exports = merge(commonWebpackConfig, browserWebpackConfig)
