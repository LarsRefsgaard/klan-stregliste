module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'ESNEXT',
	},
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 3,
				multiline: 3,
			},
		],
		'vue/script-setup-uses-vars': 'error',
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
};
