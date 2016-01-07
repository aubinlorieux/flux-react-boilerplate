var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfigFile = (process.env.npm_package_config_language == 'coffee') ? 'webpack.config.coffee.js' : 'webpack.config.js';

var webpackConfig = require('./../' + webpackConfigFile);
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, '..', 'src', 'app.js');

module.exports = function() {

  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', function() {
    console.log('Bundling project, please wait...')
  });

};
