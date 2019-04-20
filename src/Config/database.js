const mongoose = require('mongoose')
var { value } = require('./localaddress')
console.log(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : value)
var db = mongoose.connect(process.env.MONGODBADDRESS ? process.env.MONGODBADDRESS : value, {useNewUrlParser: true})

module.exports = {
  db
}
