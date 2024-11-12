import js from '@eslint/js';
import node from 'eslint-plugin-node';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.js'], // Apply this config to all JavaScript files
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      globals: {
        __dirname: 'readonly',
        module: 'readonly',
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest', // Enable the latest ECMAScript features
        sourceType: 'module',  // Enable ES module syntax
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'], // Resolve imports for .js files
        },
      },
    },
    plugins: {
      node,
      import: importPlugin,
      prettier,
    },
    rules: {
      // ESLint's recommended rules
      ...js.configs.recommended.rules,

      // Plugin-specific rules
      ...node.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      // Prettier-related rules to ensure formatting consistency
      ...prettier.rules,

      // Custom rules
      'node/no-unpublished-import': 'off',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'node/no-missing-import': 'error',
      'node/exports-style': ['error', 'module.exports'],
      'node/no-unsupported-features/es-syntax': 'off',
      'node/callback-return': 'warn',
      'node/no-new-require': 'warn',
      'no-console': 'off', // Allow console statements
    },
  },
];
