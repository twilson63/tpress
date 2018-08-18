#!/usr/bin/env node
var marked = require("marked");
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
const content = marked(md);
process.stdout.write(ejs.render(template, { content }));
