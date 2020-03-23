const common = require('./webpack.config')
const merge = require('webpack-merge')
const components = require('./components')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: components,
  output: {
    path: path.join(__dirname, '/dist/lib'),
    library: 'fiora-ui-react',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader', // 将 CSS 转化成 CommonJS 模块
        'sass-loader', // 将 Sass 编译成 CSS，默认使用 Node Sass
      ],
    }, ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
})