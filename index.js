import neostandard, { plugins } from 'neostandard'
import mocha from 'eslint-plugin-mocha'
import { error, always } from './constants.js'

export default [
  ...neostandard(),
  plugins.n.configs['flat/recommended'],
  plugins.promise.configs['flat/recommended'],
  mocha.configs.flat.recommended,
  {
    rules: {
      '@stylistic/array-bracket-spacing': [ error, always, { objectsInArrays: true, arraysInArrays: true } ]
    }
  }
]
