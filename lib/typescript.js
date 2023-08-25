module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
    'no-undef': 'off',
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'always',
    ],
    'curly': 'error',
    'brace-style': [
      'warn',
      'stroustrup',
    ],
    'prefer-const': 'error',
    'array-bracket-newline': [
      'warn',
      {
        'multiline': true,
        'minItems': 4,
      },
    ],
    'array-element-newline': [
      'warn',
      'always',
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    'object-property-newline': [
      'warn',
      { 'allowAllPropertiesOnSameLine': false },
    ],
    'key-spacing': [
      'warn',
      {
        'multiLine': {
          'beforeColon': false,
          'afterColon': true,
        }
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true,
      },
    ],
    'no-constant-condition': [
      'error',
      { 'checkLoops': false },
    ],
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
  },
};
