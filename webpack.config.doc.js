const baseConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    example: './example/src/index.tsx',
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/public/index.html',
      title: 'R-UI',
      filename: 'index.html',
    }),
  ],
})