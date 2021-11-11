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
    'plugin:cypress/recommended',
  ],
  plugins: ['cypress'],
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
    'vue/script-setup-uses-vars': 0,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    'cypress/globals': true,
  },
};
