module.exports = {
	env: {
		'browser': true,
		'es2021': true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint'
	],
	rules: {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'linebreak-style': 0,
		'react/react-in-jsx-scope': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
	}
};
