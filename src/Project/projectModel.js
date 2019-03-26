const mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  area: {
    type: Number
  },
  address: {

  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
