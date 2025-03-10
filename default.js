import neostandard, { plugins } from 'neostandard'
import { error, always } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...neostandard(),
  plugins.promise.configs['flat/recommended'],
  {
    rules: {
      '@stylistic/array-bracket-spacing': [ error, always, { objectsInArrays: true, arraysInArrays: true } ]
    }
  },
  {
    ignores: [
      '**/.svelte-kit/'
    ]
  }
]
