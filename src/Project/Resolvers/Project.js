var User = require('../../User/userModel')
var Project = require('../projectModel')
var Bid = require('../../models/bid')

async function postedBy (parent, args, context) {
  console.log(parent)
  // const {postedBy} = await Project.findById(parent.id)
  console.log(parent.postedBy)
  var object = await User.findById(parent.postedBy)
  return object
}

async function bidHistory (parent, args, context) {
  var bid = await Bid.findById(parent.bid)
  return bid
}
module.exports = {
  postedBy,
  bidHistory
}
