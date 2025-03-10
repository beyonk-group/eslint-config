import { plugins } from 'neostandard'
import { off } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  plugins.n.configs['flat/recommended'],
  {
    rules: {
      'n/no-missing-require': [ off ],
      'n/no-unsupported-features/node-builtins': [ off ]
    }
  }
]
