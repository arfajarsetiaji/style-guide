module.exports = {
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
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
	plugins: ['import', 'unicorn', 'sonarjs', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	root: true,
	rules: {},
};
