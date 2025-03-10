import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { warn, off } from './constants.js'
// import svelteConfig from './svelte.config.js'

console.log(process.cwd())

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    ignores: [
      "**/.svelte-kit/",
      "**/__sapper__/"
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: [ '**/*.svelte', '**/*.svelte.js' ],
    languageOptions: {
      parserOptions: {
        // svelteConfig // get from cwd
      }
    },
    rules: {
      'svelte/require-each-key': warn,
      'svelte/no-at-html-tags': off,
    }
  }
]
