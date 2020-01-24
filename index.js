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

/**
 * ipress
 *
 * @param {string} name - markdown name
 * @param {string} markdown - a string of markdown
 * @return {string} html string
 *
 */
module.exports = (name='ipress', md='') => {
  if (typeof name !== 'string') {
    throw new Error('string required for name')
  }
  if (typeof md !== 'string') {
    throw new Error('string required for markdown')
  }

  let html = ''
  
  const template = fs.readFileSync(__dirname + "/template.html", "utf-8");
  
  const page = fm(md)
  
  page.content = marked(page.body);
  if (!page.attributes.title) {
    page.attributes.title = name 
  }
  html = ejs.render(template, page )

  return html
}
