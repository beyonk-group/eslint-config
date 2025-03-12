import recommended from './default.js'
import node from './node.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...recommended,
  ...node
]
