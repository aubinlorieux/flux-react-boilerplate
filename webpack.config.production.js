/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModulePath = path.resolve(__dirname, 'node_modules');
var distPath = path.resolve(__dirname, 'dist');
var srcPath = path.resolve(__dirname, 'src');
var mainPath = path.resolve(__dirname, 'src', 'app.js');
var stylesheetPath = path.resolve(__dirname, 'src', 'app.less');

module.exports = {
	devtool: 'source-map',
	entry: [
		mainPath,
    stylesheetPath
	],
	output: {
		path: distPath,
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [ '', '.js' ]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
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
			include: srcPath
		},
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
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
