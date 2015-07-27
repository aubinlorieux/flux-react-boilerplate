/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./scripts/index.js'
	],
	devtool: 'eval-source-map',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// https://github.com/webpack/webpack/issues/353
		new webpack.IgnorePlugin(/vertx/)
	],
	resolve: {
		extensions: ['', '.js', '.cjsx', '.coffee']
	},
	module: {
		loaders: [{
			test: /\.css?$/,
			loaders: ['style', 'css']
		},
		{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'scripts')
		},
		{
			test: /\.csjx?$/,
			loaders: ['react-hot', 'coffee', 'cjsx'],
			include: path.join(__dirname, 'scripts')
		},
		{
			test: /\.coffee?$/,
			loader: 'coffee'
		}]
	}
};
