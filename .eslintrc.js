module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    "indent":'off',
    'generator-star-spacing': 'off',
    "vue/no-v-model-argument": "off",
    'no-console': 'off',
    'no-debugger': 'error',
    'space-before-function-paren': [0, 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': [0, {
      'properties': 'always'
    }],
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'off',
    'semi': ["error", "always"], // 分号，双引号报错提示
    "vue/max-attributes-per-line": ["error", { // html属性不换行报错提示
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "vue/html-self-closing": ["off", {}],
  }
};