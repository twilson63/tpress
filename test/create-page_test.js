const test = require('tape')
const { createPage } = require('../src/utils')

test('create page object from markdown', t => {
  const md = `---
title: foo
---

# Hello World
`
  const result = createPage({md})
  t.equal(result.page.attributes.title, 'foo')
  t.equal(result.page.body, '# Hello World\n')
  t.ok(true)
  t.end()
})
