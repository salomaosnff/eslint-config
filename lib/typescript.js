module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser'     : '@typescript-eslint/parser',
    'sourceType' : 'module',
  },
  'plugins': ['@typescript-eslint'],
  'rules'  : {
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
    'curly'      : 'error',
    'brace-style': [
      'warn',
      'stroustrup',
    ],
    'prefer-const'         : 'error',
    'array-bracket-newline': [
      'warn',
      {
        'multiline': true,
        'minItems' : 4,
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
      'warn',
      {
        'multiline'    : true,
        'minProperties': 3, 
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
          'afterColon' : true,
        },
        'align': {
          'beforeColon': false,
          'afterColon' : true,
          'on'         : 'colon',
        },
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'after' : true,
        'before': true, 
      },
    ],
    'no-constant-condition': [
      'error',
      { 'checkLoops': false },
    ],
  },
};