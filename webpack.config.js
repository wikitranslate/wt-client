var path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: './app/wt.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(eot|svg|ttf)$/, loader: 'file' },
      { test: /\.jade$/, loader: 'html!jade-html' },
      { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel?presets[]=es2015' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.(woff|woff2)$/, loader: 'url?limit=10000&mimetype=application/font-woff' }
    ]
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('../')
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
