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
  },
  budget: {
    type: Number,
    default: 0
  },
  bid: {
    type: Schema.Types.ObjectId,
    ref: 'Bid'
  }
})

module.exports = mongoose.model('Project', ProjectSchema)
