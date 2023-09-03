const webpack = require('webpack');
const path = require('path')
const { EnvironmentPlugin } = webpack;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    new EnvironmentPlugin({ ...process.env }),
  ]
}
