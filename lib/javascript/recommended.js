import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      indent: ['warn', 2],
      'linebreak-style': ['warn', 'unix'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      curly: 'warn',
      'brace-style': ['warn', 'stroustrup'],
      'prefer-const': 'warn',
      'array-bracket-newline': [
        'warn',
        {
          multiline: true,
          minItems: 4,
        },
      ],
      'array-element-newline': ['warn', 'always'],
      'comma-dangle': ['warn', 'always-multiline'],
      'object-curly-spacing': ['warn', 'always'],
      'object-curly-newline': [
        'warn',
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
        { allowAllPropertiesOnSameLine: false },
      ],
      'key-spacing': [
        'warn',
        {
          multiLine: {
            beforeColon: false,
            afterColon: true,
          },
        },
      ],
      'keyword-spacing': [
        'warn',
        {
          after: true,
          before: true,
        },
      ],
      'no-constant-condition': ['warn', { checkLoops: false }],
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-useless-assignment': 'warn',
    },
  },
];
