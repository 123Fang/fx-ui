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
    ecmaVersion: 'latest', // 启用最新的 ES 语法
    sourceType: 'module', // 默认为script，如果使用 ES Module 则应设置为module
    ecmaFeatures: { // 表示想使用的额外语言特性
      jsx: true // 开启 jsx
    }
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    "no-unused-vars": 0,
    'vue/require-prop-type-constructor': 0,
    'no-extra-boolean-cast': 0
  }
}
