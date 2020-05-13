/**
 * loads the template from the install path directory
 *
 *
 */
const fs = require('fs')
const template = 'template.html'
const UTF8 = 'utf-8'

const { Either } = require('crocks')
const { Left, Right } = Either

const tryCatch = fn => v => {
  try {
    return Right(fn(v))
  } catch (e) {
    return Left(e)
  }
}


  


