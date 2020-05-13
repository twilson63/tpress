const { isNil, set, lensPath, pathOr, assoc, is, prop } = require('ramda')
const { Either } = require('crocks')
const fm = require('front-matter')
const ejs = require('ejs')
const marked = require('marked')

const { Left, Right } = Either

const applyTemplate = ({template, page}) => ejs.render(template, page) 

/**
 * setTitle
 *
 * sets the title of the HTML document if no title is specified
 *
 */
const titleLens = lensPath(['page', 'attributes', 'title'])
const setTitle = ctx => isNil(pathOr(null, ['page','attributes', 'title'])) ? set(titleLens, ctx.name, ctx) : ctx

/**
 * createContentHTML takes the page body and parses it to html
 *
 */
const pageContentLens = lensPath(['page', 'content'])
const createContentHTML = ctx => set(
  pageContentLens,
  marked(pathOr('', ['page', 'body'], ctx)),
  ctx
)

/**
 * renderBody takes the markdown body and attributes and 
 * uses ejs to render any template place holders
 *
 */
const bodyLens = lensPath(['page', 'body'])
const renderBody = ctx => set(bodyLens, ejs.render(
  pathOr('', ['page', 'body'], ctx),
  pathOr({}, ['page', 'attributes'], ctx)
), ctx)

/**
 * create page parses the markdown file separating
 * the front matter attributes from the markdown
 * body
 */
const createPage = ctx => assoc('page', fm(ctx.md), ctx)

/**
 * validates that the name property on the article object
 * is a string
 */
const validateName = ctx => is(String, prop('name', ctx))
  ? Right(ctx)
  : Left(ctx)

const validateMd = ctx => is(String, prop('md', ctx))
  ? Right(ctx)
  : Left(ctx)

module.exports = { validateName, validateMd, createPage,
  renderBody, createContentHTML, setTitle, applyTemplate }
