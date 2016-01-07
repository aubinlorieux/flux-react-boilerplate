/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./scripts/index.js',
		'./styles/stylesheet.less'
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
		},
		{
			test: /\.less?$/,
			loaders: 'style!css!autoprefixer!less'
		},
		{
    	test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    	loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
    	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    	loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
    	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    	loader: 'file'
    },
    {
    	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    	loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
	}
};
