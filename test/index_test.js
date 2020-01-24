const test = require('tape')
const isHtml = require('is-html')
const ipress = require('../')

test('convert markdown to html', t => {
  const html = ipress('walrus', `---
title: Hello World
---

# I am the walrus
`)
  t.ok(isHtml(html))
  t.end()
})

