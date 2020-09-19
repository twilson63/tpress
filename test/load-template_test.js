const test = require('tape')
const loadTemplate = require('../src/load-template')


test('read template file', t => {
  const log = x => console.log(x)
  loadTemplate({})
    .either(log, result => {
      t.ok(result.template)
      t.equal(result.template, templateString())
      t.end()
    })
})

function templateString() {
  return `<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title><%= attributes.title %></title>\n  <meta name="description" content="<%= attributes.description %>">\n  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />\n  <% if (attributes.css) { %>\n    <% (attributes.css.split(\' \')).map(css => { %>\n    <link rel="stylesheet" href="<%= css %>">\n    <% }) %>\n    <% } else { %>\n  <link rel="stylesheet" href="/style.css">\n  <% } %>\n  <meta property="og:title" content="<%= attributes.title %>">\n  <meta property="og:image" content="<%= attributes.image_url %>">\n  <meta property="og:image:alt" content="<%= attributes.image_alt %>">\n  <meta property="og:description" content="<%= attributes.description %>">\n  <% (attributes.scripts || []).map(s => { %>\n  <script defer src="<%= s %>"><script><% }) %>\n  <% if (attributes.code) { %>\n  <link rel="stylesheet"\n        href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.2.0/build/styles/agate.min.css">\n  <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.2.0/build/highlight.min.js"></script>     \n  <script>hljs.initHighlightingOnLoad();</script>  \n  <% } %>\n</head>\n\n<body>\n  <div id="wrapper">\n  <%- content %>\n  </div> \n</body>\n\n</html>\n`
}
