import mocha from 'eslint-plugin-mocha'
import { off } from './constants.js'

export default [
  mocha.configs.flat.recommended,
  {
    rules: {
      'mocha/no-mocha-arrows': [ off ],
      'mocha/no-setup-in-describe': [ off ]
    }
  }
]
