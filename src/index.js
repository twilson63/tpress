const { Either } = require('crocks')
const article = require('./article')
const {
  validateName, validateMd, createPage,
  renderBody, createContentHTML, setTitle, applyTemplate } = require('./utils')

const loadTemplate = require('./load-template')

module.exports = (name='ipress', md='') => 
  Either.of(article(name, md))
    .chain(validateName)
    .chain(validateMd)
    .chain(loadTemplate)
    .map(createPage)
    .map(renderBody)
    .map(createContentHTML)
    .map(setTitle)
    .either(e => console.log(e.message), applyTemplate)

