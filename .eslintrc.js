module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		babelOptions: {
			configFile: __dirname + '/babel.config.json',
		},
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'no-console': 'warn',
		'prettier/prettier': ['error'],
		'react/prop-types': 'off',
	},
};
