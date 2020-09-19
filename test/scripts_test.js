const test = require('tape')
const ipress = require('../')

const answer = '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>foo</title>\n  <meta name="description" content="">\n  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />\n  \n  <link rel="stylesheet" href="/style.css">\n  \n  <meta property="og:title" content="foo">\n  <meta property="og:image" content="">\n  <meta property="og:image:alt" content="">\n  <meta property="og:description" content="">\n  \n  <script defer src="foo.js"><script>\n  <script defer src="bar.js"><script>\n  \n</head>\n\n<body>\n  <div id="wrapper">\n  <h1 id="hello-world">Hello World</h1>\n<p>foo</p>\n\n  </div> \n</body>\n\n</html>\n'

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

