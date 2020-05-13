const { Either } = require('crocks')
const article = require('./article')
const {
  validateName, validateMd, createPage,
  renderBody, createContentHTML, setTitle, applyTemplate } = require('./utils')

const loadTemplate = require('./load-template')


/**
 * take a markdown document and 
 * turn it into a solid HTML document
 */
module.exports = (name='ipress', md='') => 
  Either.of(article(name, md))
    .chain(validateName)
    .chain(validateMd)
    .chain(loadTemplate)
    .map(createPage)
    .map(renderBody)
    .map(createContentHTML)
    .map(setTitle)
    .either(handleError, applyTemplate)


function handleError(e) {
  console.log(e.message)
  return `<h1>${e.message}</h1>`
}
