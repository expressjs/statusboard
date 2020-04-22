'use strict'
const { describe, it } = require('mocha')
const assert = require('assert')
const pkg = require('../package.json')
const exsb = require('../')

describe(pkg.name, () => {
  it('should create a configured statusboard instance', async () => {
    const sb = await exsb()
    assert.strictEqual(typeof sb.buildIndex, 'function')
    assert.strictEqual(typeof sb.buildSite, 'function')
    assert.strictEqual(typeof sb.serve, 'function')
  })
})
