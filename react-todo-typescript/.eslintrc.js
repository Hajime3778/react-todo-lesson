module.exports = {
  root: true,
  // 適用する環境
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  // パーサー
  parser: '@typescript-eslint/parser',
  // jsx を使います
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  // React のバージョンは自動検出に
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  // 基本的にルールは recommended に従う
  // prettier 関連は配列の最後尾に書く
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'eslint-config-prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
