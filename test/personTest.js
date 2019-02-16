import { Person } from '../src/person.js'
import { describe, it } from 'mocha'
import { assert } from 'chai'

describe('person', function () {
  it('has default age of 0', function () {
    const foo = new Person('foo')
    assert.equal(foo.age, 0)
  })

  it('keeps its name', function () {
    const foo = new Person('foo')
    assert.equal(foo.name, 'foo')
  })
})
