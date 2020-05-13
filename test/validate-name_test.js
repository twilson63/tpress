const test = require('tape')

const { validateName } = require('../src/utils')

test('name should be string', t => {
  t.plan(1)
  validateName({ name: 'beep' })
    .either(_ => t.ok(false), _ => t.ok(true))
})

test('when name is not string', t => {
  t.plan(1)
  validateName({ name: null })
    .either(_ => t.ok(true), _ => t.ok(false))
})



