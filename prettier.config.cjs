const options = {
	$schema: 'http://json.schemastore.org/prettierrc',
	arrowParens: 'avoid',
	singleQuote: true,
	useTabs: true,
};

const plugins = [
	'@ianvs/prettier-plugin-sort-imports',
	'prettier-plugin-packagejson',
];

const sortImportOptions = {
	importOrder: [
		'<BUILTIN_MODULES>',
		'^(angular$)|^(@angular/(.*)$|^(angular/(.*)$)',
		'^(react$)|^(@react/(.*)$|^(react/(.*)$)',
		'^(vue$)|^(@vue/(.*)$|^(vue/(.*)$)',
		'^(next$)|^(@next/(.*)$)|^(next/(.*)$)',
		'^(nuxt$)|^(@nuxt/(.*)$)|^(nuxt/(.*)$)',
		'<THIRD_PARTY_MODULES>',
		'<TYPES>',
		'',
		'^(@)',
		'',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
};

module.exports = {
	plugins,
	...options,
	...sortImportOptions,
};
