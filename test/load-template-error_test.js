const test = require('tape')
const rewire = require('rewire')
const loadTemplate = rewire('../src/load-template')
const { Either } = require('crocks')

loadTemplate.__set__({
  safeRead: (n,e) => Either.Left({message: 'file not found'})
})

test('template file load error', t => {
  const log = x => console.log(x)
  loadTemplate({})
    .either(err => {
      t.equal(err.message, 'file not found')
      t.ok(true)
      t.end()
    }, log)
})


