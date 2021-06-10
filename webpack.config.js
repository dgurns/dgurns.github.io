require('dotenv').config();

const webpack = require('webpack');

module.exports = (env) => ({
	mode: env.NODE_ENV,
	entry: `${__dirname}/src/index.js`,
	devtool:
		env.NODE_ENV === 'development' ? 'eval-cheap-source-map' : 'source-map',
	devServer: {
		port: 3000,
		historyApiFallback: true,
		disableHostCheck: true,
		hot: true,
		hotOnly: true,
	},
	output: {
		path: `${__dirname}/build`,
		publicPath: '/build/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
		],
	},
	plugins:
		process.argv.indexOf('-p') === -1
			? []
			: [
					new webpack.optimize.UglifyJsPlugin({
						output: {
							comments: false,
						},
					}),
			  ],
});
