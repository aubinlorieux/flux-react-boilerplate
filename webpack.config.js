/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./scripts/index.js',
		'./styles/stylesheets.less'
	],
	devtool: 'eval-source-map',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'scripts')
		},
		{
			test: /\.less$/,
			loader: 'style!css!autoprefixer!less'
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
