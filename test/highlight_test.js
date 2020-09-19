const test = require('tape')
const isHtml = require('is-html')
const ipress = require('../src')

test('highlight test', t => {
  const html = ipress('walrus', `---
title: Hello World
code: true
---

# I am the walrus

`)
  t.ok(isHtml(html))
  t.end()
})

