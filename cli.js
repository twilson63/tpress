#!/usr/bin/env node
var marked = require("marked");
var fm = require('front-matter');
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");

const srcFile = process.argv[2];

if (!srcFile) {
  console.log("No markdown file found!");
  console.log("USAGE: ipress [src.md]");
  process.exit(0);
}

const template = fs.readFileSync(__dirname + "/template.html", "utf-8");
const md = fs.readFileSync(path.resolve(srcFile), "utf-8");
const page = fm(md)

page.content = marked(page.body);
if (!page.attributes.title) {
  page.attributes.title = srcFile.split('.')[0]
}
process.stdout.write(ejs.render(template, page ));
