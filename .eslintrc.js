module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'arrow-body-style': [2, 'as-needed'],
    'prefer-template': 2,
    'react/prop-types': 0,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    semi: [2, 'always'],
    indent: ['error', 2]
  }
};
