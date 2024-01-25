module.exports = {
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:unicorn/recommended',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'prettier',
	],
	ignorePatterns: ['.eslintrc.cjs'],
	overrides: [
		{
			files: ['**/*.{cjs,mjs,js,jsx}'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
	],
	plugins: [
		'import',
		'react',
		'react-hooks',
		'jsx-a11y',
		'unicorn',
		'sonarjs',
		'@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	root: true,
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
