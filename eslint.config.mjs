// eslint.config.mjs (Flat Config)

import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    "env": { browser: true, es2021: true, node: true }
  },
  // Ignore build artifacts
  { ignores: ['node_modules', 'dist', 'build', 'coverage'] },

  // Base JS recommended rules
  js.configs.recommended,

  // React / JSX rules
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Imports
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      // A11y
      'jsx-a11y/anchor-is-valid': 'warn',

      // Prettier formatting (optional)
      'prettier/prettier': ['warn'],
    },
  },
];
