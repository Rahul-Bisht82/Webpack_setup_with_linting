const isProduction = 'development';

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jquery': true,
    'es6': true,
    'jest': true,
  },
  'extends': [
    'google',
    'eslint:recommended',
  ],
  // 'plugins': ['prettier'],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  rules: {
    'new-cap': ['error'],
    'no-eq-null': ['error'],
    indent: ['error', 2, { "SwitchCase": 1, ignoredNodes: ['TemplateLiteral'] }],
    eqeqeq: ['error'],
    curly: ['error'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-undef': ['error'],
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error'],
    semi: ['error', 'always'],
    'no-trailing-spaces': ['warn'],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-continue': 'error',
    'no-implied-eval': 'error',
    'no-eval': 'error',
    'no-delete-var': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-lonely-if': 'error',
    'guard-for-in': 'error',
    'default-case': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-const-assign': 'error',
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    'no-prototype-builtins': 'warn',
    'no-sequences': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-debugger': isProduction ? 'error' : 'warn',
    'no-warning-comments': [
      2,
      {
        terms: ['@cc_on', '@if', '@else', '@end'],
        location: 'anywhere',
      },
    ],
    'arrow-body-style': 'warn',
    'arrow-parens': 'off',
    'arrow-spacing': 'warn',
    'prefer-destructuring': 'off',
    'prefer-const': 'error',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-empty-function': 'error',
    'max-params': ['error', 11],
    complexity: ['error', 37],
    'no-loop-func': 'error',
    'no-inner-declarations': 'error',
    'no-extra-label': 'error',
    'no-multi-str': 'error',
    'max-depth': ['error', 7],
    'max-len': [1, 150, 2, { ignoreComments: true }],
    'no-octal': 'error',
    'no-fallthrough': 'error',
    'no-extra-semi': 'off',
    'no-new-wrappers': 'error',
    'no-unreachable': 'error',
    'for-direction': 'off',
    'no-self-compare': 'error',
    'use-isnan': 'error',
    radix: 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-cond-assign': 'warn',
    'no-inline-comments': 'warn',
    'max-lines': ['warn', 1220],
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
      },
    ],
    // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
