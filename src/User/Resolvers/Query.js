var User = require('../userModel')
var { getAdmin } = require('../../middleware/adminAuthenticate')

async function allUsers (root, args, context, info) {
  const userId = await getAdmin(context)

  const users = await User.find({}).limit(args.limit).skip(args.skip)
  return users
}

module.exports = {
  allUsers
}
