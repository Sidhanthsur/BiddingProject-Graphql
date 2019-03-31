
async function address (parent, args, context) {
  console.log(parent)
  // const {postedBy} = await Project.findById(parent.id)
//   console.log(parent.postedBy)
//   var object = await User.findById(parent.postedBy)
  return {
    address: 'this is testing',
    id: '510'
  }
}

module.exports = {
  address
}
