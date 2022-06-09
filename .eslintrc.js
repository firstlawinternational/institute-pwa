module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  globals: {
    computed: 'readonly',
    defineNuxtPlugin: 'readonly',
    defineProps: 'readonly',
    useNuxtApp: 'readonly',
    useRuntimeConfig: 'readonly',
  },
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi-line'],
    'space-before-function-paren': ['error', 'never'],
    'vue/no-v-html': 'off',
  },
}
