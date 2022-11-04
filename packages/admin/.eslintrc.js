module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rule-of-hooks': 'off',
  },
};
