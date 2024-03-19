module.exports = {
  // 注册 stylelint 的 prettier 插件
  plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    'stylelint-prettier/recommended'
  ],
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
  }
}
