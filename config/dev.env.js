'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASEAPI: '"http://172.16.90.25:3000"',
  BASEURL: '"http://172.16.90.25:3000"'
})
