const test = require('tape')

const { validateMd } = require('../src/utils')

test('md should be string', t => {
  t.plan(1)
  validateMd({ md: '# beep' })
    .either(_ => t.ok(false), _ => t.ok(true))
})

test('when md is not string', t => {
  t.plan(1)
  validateMd({ name: null })
    .either(_ => t.ok(true), _ => t.ok(false))
})



