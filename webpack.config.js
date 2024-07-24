const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    menu: './src/js/menu.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.html',
      chunks: ['index'],  // Include only index.js
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: './src/html/menu.html',
      chunks: ['menu'],  // Include only menu.js
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: 'asset/resource',
      }
    ],
  },
};
