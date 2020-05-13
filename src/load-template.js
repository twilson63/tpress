/**
 * loads the template from the install path directory
 *
 *
 */
const fs = require('fs')
const template = 'template.html'
const UTF8 = 'utf-8'
const { assoc } = require('ramda')

const { Either } = require('crocks')
const { Left, Right } = Either
const tryCatch = fn => (a,b) => { 
  try {
    return Right(fn(a,b))
  } catch (e) {
    return Left(e)
  }
}
const safeRead = tryCatch(fs.readFileSync)

module.exports = obj =>
  safeRead(`${__dirname}/../${template}`, UTF8)
    .map(v => assoc('template', v, obj))



