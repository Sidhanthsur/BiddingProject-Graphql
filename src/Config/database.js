const mongoose = require('mongoose')
const fs = require('fs')
var add = ''

try {
  var {value} = require('./localaddress.js')
  console.log('hawkhd')
  console.log(value)
  add = value
} catch (err) {
  console.error(err)
}

console.log(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : add)
var db = mongoose.connect(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : add, {useNewUrlParser: true})

module.exports = {
  db
}
