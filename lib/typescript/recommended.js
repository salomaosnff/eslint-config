import tseslint from 'typescript-eslint';
import js from '../javascript/recommended.js';

export default tseslint.config(...js, ...tseslint.configs.recommended, {
  rules: {
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    'no-undef': 'off',
  },
});
