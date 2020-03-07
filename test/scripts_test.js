const test = require('tape')
const ipress = require('../')

const answer = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>foo</title>
  <meta name="description" content="">
  <link rel="icon" type="image/png" href="https://placehold.it/32/32">
  <link rel="stylesheet" href="/style.css">
  <meta property="og:title" content="foo">
  <meta property="og:image" content="">
  <meta property="og:image:alt" content="">
  <meta property="og:description" content="">
  
  <script defer src="foo.js"><script>
  <script defer src="bar.js"><script>
</head>

<body>
  <div id="wrapper">
  <h1 id="hello-world">Hello World</h1>
<p>foo</p>

  </div> 
</body>

</html>
`

test('test scripts feature', t => {
  const example = `---
title: foo
scripts: ["foo.js", "bar.js"]
---

# Hello World 

<%= title %>
`
  const html = ipress('hello', example)
  t.equal(html, answer)
  t.ok(true)
  t.end()
})

