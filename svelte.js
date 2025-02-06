import node from './index.js'
import svelte from 'eslint-plugin-svelte'

export default [
  ...node,
  svelte.configs['flat/recommended']
]
