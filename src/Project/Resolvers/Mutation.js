var Project = require('../projectModel')
var { getUser } = require('../../middleware/userAuthenticate')

async function createProject (root, args, context, info) {
  const userId = await getUser(context)
  if (!userId) {
    throw new Error('You need to be a valid user')
  }

  var newProject = Project({
    area: args.area,
    address: args.address,
    postedBy: userId
  })

  var project = await newProject.save()
  return project
}

module.exports = {
  createProject
}
