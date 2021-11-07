require('dotenv').config();

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => {
	const isDevMode = env.NODE_ENV === 'development';

	return {
		mode: isDevMode ? 'development' : 'production',
		entry: `${__dirname}/src/index.js`,
		devtool: isDevMode ? 'eval-cheap-source-map' : 'source-map',
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
						plugins: [
							isDevMode && require.resolve('react-refresh/babel'),
						].filter(Boolean),
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
		plugins: isDevMode ? [new ReactRefreshWebpackPlugin()] : [],
	};
};
