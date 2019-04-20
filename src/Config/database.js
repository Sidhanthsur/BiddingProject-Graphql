const mongoose = require('mongoose')
const fs = require('fs')
var add = ''
try {
  if (fs.existsSync('./localaddress.js')) {
    var {value} = require('./localaddress')
    add = value
  }
} catch (err) {
  console.error(err)
}

console.log(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : add)
var db = mongoose.connect(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : add, {useNewUrlParser: true})

module.exports = {
  db
}
