const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:{
    index:'./src/index.js',
  },
  output:{
    filename:`[name].bundle.js`,
    path:path.resolve(__dirname,'dist'),
  },

  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html',
    }),
  ]
};