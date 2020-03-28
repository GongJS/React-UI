const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  entry: {
    example: './example/src/index.tsx'
  },
  // devServer: {
  //   host: '192.168.0.103', //默认localhost，若是不配成0.0.0.0，在虚拟机里，若是采用端口映射，绑定host 域名的方式，访问不到
  //   port: 8088, //自定义端口
  //   compress: true, //是否启用gzip压缩
  //   disableHostCheck: true, // That solved it，若是不配这个，采用自定义域名方式访问，则会报Invalid Host header错误
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'R-UI'
    }),
    new ExtractTextPlugin('[name].css')
  ]
});