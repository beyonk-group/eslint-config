'use strict'

const { always, error } = require('./constants')

module.exports = {
  extends: 'standard',
  rules: {
    'array-bracket-spacing': [ error, always, { objectsInArrays: true, arraysInArrays: true } ]
  }
}
