module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    exclude: [],
    files: [{ pattern: 'test/spec.bundle.js', watched: false }],
    frameworks: ['mocha', 'chai'],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ],
    port: 9876,
    preprocessors: { 'test/spec.bundle.js': ['webpack', 'sourcemap'] },
    reporters: ['mocha'],
    singleRun: true,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.(eot|svg|ttf)$/, loader: 'file' },
          { test: /\.jade$/, loader: 'html!jade-html' },
          { test: /\.jpg$/, loader: 'file-loader' },
          { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel?presets[]=es2015' },
          { test: /\.json$/, loader: 'json' },
          { test: /\.html/, loader: 'raw' },
          { test: /\.png$/, loader: 'file-loader' },
          { test: /\.styl$/, loader: 'style!css!stylus' },
          { test: /\.(woff|woff2)$/, loader: 'url?limit=10000&mimetype=application/font-woff' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
