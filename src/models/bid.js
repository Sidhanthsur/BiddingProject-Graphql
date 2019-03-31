var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BidSchema = new Schema({
  by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  forProject: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  highest: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Bid', BidSchema)
