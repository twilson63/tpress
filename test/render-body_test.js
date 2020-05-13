const test = require('tape')
const { renderBody } = require('../src/utils')

test('render ejs for markdown body', t => {
  const page = {
    body: '# <%= title %>',
    attributes: { title: 'Hello World' }
  }

  const result = renderBody({ page })
  t.equal(result.page.body, '# Hello World')
  t.end()
})
