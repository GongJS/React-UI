const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
  CheckerPlugin
} = require('awesome-typescript-loader')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '', dir)
}
module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'R-UI',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, './lib/components'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './lib')],
        loader: 'eslint-loader',
        options: {
          emitWarning: true, // 这个配置需要打开，才能在控制台输出warning信息
          emitError: true, // 这个配置需要打开，才能在控制台输出error信息
          fix: true // 是否自动修复，如果是，每次保存时会自动修复可以修复的部分
        }
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [new CheckerPlugin(), new CleanWebpackPlugin(), new StyleLintPlugin({fix: true})],
}