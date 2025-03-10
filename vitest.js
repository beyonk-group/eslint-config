import vitest from 'eslint-plugin-vitest'
import globals from 'globals'
import { off } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [ '**/**.spec.js' ],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
