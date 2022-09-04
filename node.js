module.exports = {
  env: { es2021: true, node: true },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import-helpers',
    'unused-imports'
  ],
  rules: {
    'prettier/prettier': ['error', {
      printWidth: 80,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'always',
      semi: true,
    }],
    'class-methods-use-this': 'off',
    'no-console': ['error', { 'allow': ['info', 'error'] }],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/^(!@docs|!@config|!@constants|!@modules|!@shared|!@helpers|!@interfaces|!@services|!@utils)/',
          '/^(@docs|@config|@constants|@modules|@shared|@helpers|@interfaces|@services|@utils)/',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_'
      }
    ],
  },
};
