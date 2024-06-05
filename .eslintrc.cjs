module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
  }
}
