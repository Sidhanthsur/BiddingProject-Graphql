const mongoose = require('mongoose')

var db = mongoose.connect('mongodb://sidhanth:password1234@ds121406.mlab.com:21406/vpollgraphtut', {useNewUrlParser: true})

module.exports = {
  db
}
