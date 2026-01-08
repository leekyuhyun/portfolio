import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error', // Prettier 규칙 위반 시 에러로 표시
      'react/react-in-jsx-scope': 'off', // React 17+ 환경에서는 필요 없음
      'react/prop-types': 'off', // 필요에 따라 켬/끔 가능
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  configPrettier, // 마지막에 추가하여 충돌 방지
];