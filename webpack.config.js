/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModulePath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var srcPath = path.resolve(__dirname, 'src');
var mainPath = path.resolve(__dirname, 'src', 'app.js');
var stylesheetPath = path.resolve(__dirname, 'src', 'app.less');

module.exports = {
	entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath,
    stylesheetPath
	],
	devtool: 'eval-source-map',
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
	],
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
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
