
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: './build',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.css$/, loaders: [ 'css' ] }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ],

}
