/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./scripts/index',
		'./styles/stylesheets.less'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [ '', '.js' ]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
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
