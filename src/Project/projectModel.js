const mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  area: {
    type: Number
  },
  address: {
    type: String
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Project', ProjectSchema)