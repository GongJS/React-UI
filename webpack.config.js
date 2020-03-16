const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

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
      '@': path.resolve(__dirname, './lib'),
    },
  },
  module: {
    rules: [
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
  plugins: [new CheckerPlugin()],
}
