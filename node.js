import { plugins } from 'neostandard'
import { off, error } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  plugins.n.configs['flat/recommended'],
  {
    rules: {
      'n/no-missing-require': [ off ],
      'n/no-unsupported-features/node-builtins': [ off ],
      'n/no-extraneous-import': [ error, {
        allowModules: [
          '@beyonk/eslint-config'
        ]
      } ]
    }
  },
  {
    files: [ '**/**.spec.js' ],
    rules: {
      'n/no-unpublished-import': [ off ]
    }
  }
]
