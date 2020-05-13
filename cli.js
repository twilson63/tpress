#!/usr/bin/env node
var ipress = require('./src')

var fs = require("fs");
var path = require("path");

const srcFile = process.argv[2];

if (!srcFile) {
  console.log("");
  console.log("ipress");
  console.log("----------------------");
  console.log("No markdown file found!");
  console.log("USAGE: ipress [src.md]");
  console.log("");
  process.exit(0);
}

const md = fs.readFileSync(path.resolve(srcFile), "utf-8");
const name = srcFile.split('.')[0]

process.stdout.write(ipress(name, md));
