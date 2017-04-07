var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'main': __dirname + '/src/main.js'
  },
  output: {
    path: __dirname + '/public',
    filename: './[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.html', '.vue', '.js' ],
    modules: [
    path.resolve(__dirname + '/js'),
    path.resolve(__dirname + '/node_modules')
  ]
  },
  devtool: 'inline-source-map',
  plugins: []
};