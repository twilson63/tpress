const test = require('tape')
const isHtml = require('is-html')
const ipress = require('../')

test('convert markdown to html', t => {
  const html = ipress('walrus', `---
title: Hello World
image_url: https://www.fillmurray.com/g/300/300
image_alt: Bill Murray
parameter: Its raining tacos
---

# I am the walrus


<%= parameter %>

![<%= image_alt %>](<%= image_url %>)

`)
  console.log(html)
  t.ok(isHtml(html))
  t.end()
})

test('test with no front matter', t => {
  const html = ipress('hello', `# Hello World`)
  t.ok(isHtml(html))
  t.end()
})

test('style param', t => {
  const html = ipress('foo', `---
title: FooBar
css: foo.css
---

# I like style

`)
  console.log(html)
  t.ok(isHtml(html))
  t.end()
})

