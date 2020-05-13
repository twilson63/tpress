const test = require('tape')
const { createContentHTML } = require('../src/utils')

test('create html content', t => {
  const page = {
    body: '# Hello World'
  }
  const result = createContentHTML({page})
  t.equal(result.page.content, '<h1 id="hello-world">Hello World</h1>\n')
  t.end()
})

