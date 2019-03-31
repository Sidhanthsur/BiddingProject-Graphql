var Project = require('../Project/projectModel')
var User = require('../User/userModel')

async function forProject (parent, args, context) {
  var project = await Project.findById(parent.forProject)
  return project
}

async function by (parent, args, context) {
  var user = await User.findById(parent.by)
  return user
}

module.exports = {
  forProject,
  by
}
