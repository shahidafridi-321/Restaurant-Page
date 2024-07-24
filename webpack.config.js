const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    menu: './src/js/menu.js',
  },
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.html',
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
        test: /\.(woff|woff2|ttf|)$/,
        type: 'asset/resource',
      }

    ],
  },
};