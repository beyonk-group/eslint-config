import { plugins } from 'neostandard'
import { error, always, off } from './constants.js'

export default [
  plugins.n.configs['flat/recommended'],
  {
    rules: {
      'n/no-missing-require': [ off ],
      'n/no-unsupported-features/node-builtins': [ off ]
    }
  }
]
