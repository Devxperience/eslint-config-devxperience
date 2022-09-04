module.exports = {
  env: { es2021: true, node: true },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  plugins: ['@typescript-eslint', 'prettier', 'import-helpers', 'unused-imports'],
  rules: {
    'prettier/prettier': ['error', {
      printWidth: 80,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'always',
      semi: true,
    }],
    '@typescript-eslint/ban-types': 'off',
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': ['error', 'ignorePackages', { 'ts': 'never' }],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/^(!@docs|!@config|!@constants|!@modules|!@shared|!@helpers|!@interfaces|!@internals|!@services|!@utils)/',
          '/^(@docs|@config|@constants|@modules|@shared|@helpers|@interfaces|@internals|@services|@utils)/',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { 'allow': ['info', 'error'] }],
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
  settings: { 'import/resolver': { typescript: {} } },
};
