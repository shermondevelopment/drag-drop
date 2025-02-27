import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      'max-lines': ['error', { 'max': 120, 'skipComments': true }]
    }
  },
]