var webpack = require('webpack')
var fs = require('fs');
var path = require('path')

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.build.js',
    publicPath: 'boss-ui/',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },{
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Sass to CSS
        }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /(\.jp(e)g|\.png|\.gif|\.svg)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        },
      }
    }]
  }
};
