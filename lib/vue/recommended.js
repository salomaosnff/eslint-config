import vue from 'eslint-plugin-vue';

export default [
  ...vue.configs['flat/recommended'],
  { rules: { 'vue/require-default-prop': 'off' } },
];
