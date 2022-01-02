module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab', {
			"SwitchCase": 1
		}],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'linebreak-style': 0,
		'react/react-in-jsx-scope': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
