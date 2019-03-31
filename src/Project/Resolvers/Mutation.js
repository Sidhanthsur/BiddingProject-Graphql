var Project = require('../projectModel')
var Bid = require('../../models/bid')
var { getUser } = require('../../middleware/userAuthenticate')
var mongoose = require('mongoose')

async function createProject (root, args, context, info) {
  const userId = await getUser(context)
  if (!userId) {
    throw new Error('You need to be a valid user')
  }

  var id = mongoose.Types.ObjectId()
  var bid = new Bid({
    forProject: id
  })
  var bidObj = await bid.save()
  var newProject = Project({
    area: args.area,
    address: args.address,
    postedBy: userId,
    budget: args.budget,
    bid: bidObj.id,
    _id: id
  })

  var project = await newProject.save()
  console.log(bidObj)
  console.log(project)
  return project
}

async function getProject (root, args, context, info) {
  var project = await Project.findById(args.id)
  return project
}
module.exports = {
  createProject,
  getProject
}
