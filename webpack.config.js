var webpack = require('webpack')
var ExtractPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname,'dist'),
      filename: 'bundle.js'
   },
   devtool:'source-map',
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015']
            }
         },
         {
            test: /\.styl$/,
            exclude: /node_modules/,
            loader: ExtractPlugin.extract('style', 'css!stylus')
         }
      ]
   },
   plugins: [
      new ExtractPlugin('css/bundle.css')
   ]
}
