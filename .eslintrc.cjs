module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 'true'
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    "no-unused-vars": 0,
    'vue/require-prop-type-constructor': 0,
    'no-extra-boolean-cast': 0
  }
}
