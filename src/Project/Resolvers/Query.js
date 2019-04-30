var Project = require('../projectModel')

async function getProjects () {
  var projects = await Project.find({})
  return projects
}

module.exports = {
  getProjects
}
