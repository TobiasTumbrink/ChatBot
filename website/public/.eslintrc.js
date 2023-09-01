module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    'ecmaVersion': 2018,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
    'linebreak-style': [
      'error',
      'unix',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-trailing-spaces': [
      'error',
      {'ignoreComments': true,
        'skipBlankLines': true},
    ],
    'curly': [
      'error',
    ],
    'eqeqeq': [
      'warn',
      'smart',
    ],
    'quotes': [
      'warn',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1,
        'ArrayExpression': 1,
        'ImportDeclaration': 1,
      },
    ],
    'camelcase': [
      'error',
    ],
    'no-console': 0,
    'no-unused-vars': 0,
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
