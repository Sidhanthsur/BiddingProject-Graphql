var User = require('../../User/userModel')
var Project = require('../projectModel')

async function postedBy (parent, args, context) {
  console.log(parent)
  // const {postedBy} = await Project.findById(parent.id)
  console.log(parent.postedBy)
  var object = await User.findById(parent.postedBy)
  return object
}

module.exports = {
  postedBy
}
