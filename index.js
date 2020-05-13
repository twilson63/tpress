/**
 * ipress
 *
 * a business rule that converts a markdown file into
 * an html page, providing the open graph headers 
 * using frontmatter. When building the html page
 * it wraps the html generated content in a div with 
 * a class name of markdown.
 */
var marked = require("marked");
var fm = require('front-matter');
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");
var { Either } = require('crocks')
var { assoc, pathOr, lensPath, set, is, prop } = require('ramda')

var { Left, Right } = Either
//=============== fantasy land =========================
//
const article = (name, md, template = '', page={}, content='') => 
({
  name,
  md,
  template,
  page,
  content
})

const validateName = ctx => is(String, prop('name', ctx)) ? Right(ctx) : Left({ message: 'name is not a string'})
const validateMd = ctx => is(String, prop('md', ctx)) ? Right(ctx) : Left({ message: 'md is not a string'})

// TODO: load template should check for file to exist use trycatch Either
const loadTemplate = assoc('template', fs.readFileSync(__dirname + "/template.html", "utf-8"))
const createPage = ctx => assoc('page', fm(ctx.md), ctx)
const bodyLens = lensPath(['page', 'body'])
const createBody = ctx => set(bodyLens, 
  ejs.render(
    pathOr('', ['page', 'body'], ctx), 
    pathOr({}, ['page', 'attributes'], ctx)
  ), ctx
)
const pageContent = lensPath(['page', 'content'])
const createContent = ctx => set(pageContent,  
  marked(pathOr('', ['page','body'], ctx)), 
  ctx
)
const titleLens = lensPath(['page','attributes', 'title'])
const setTitle = ctx => pathOr(null, ['page', 'attributes', 'title']) === null ? set(titleLens, ctx.name, ctx) : ctx 
const applyTemplate = ({template, page}) => ejs.render(template, page) 


//=============== side effects ========================
module.exports = (name='ipress', md='') => 
  Either.of(article(name, md))
    .chain(validateName)
    .chain(validateMd)
    .map(loadTemplate)
    .map(createPage)
    .map(createBody)
    .map(createContent)
    .map(setTitle)
    .either(err => err, applyTemplate)

/**
 * ipress
 *
 * @param {string} name - markdown name
 * @param {string} markdown - a string of markdown
 * @return {string} html string
 *
 */
const backup = (name='ipress', md='') => {
  if (typeof name !== 'string') {
    throw new Error('string required for name')
  }
  if (typeof md !== 'string') {
    throw new Error('string required for markdown')
  }

  let html = ''
  
  const template = fs.readFileSync(__dirname + "/template.html", "utf-8");
  
  const page = fm(md)
  // allow access to attributes from markdown
  page.body = ejs.render(page.body, page.attributes)
  // convert markdown into html
  page.content = marked(page.body);
  console.log(page)
  if (!page.attributes.title) {
    page.attributes.title = name 
  }
  html = ejs.render(template, page )

  return html
}
