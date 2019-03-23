var User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = 'skajndkjwand'
const jwt = require('jsonwebtoken')
const { getUser } = require('../middleware/userAuthenticate')

async function signup (parent, args, context, info) {
  const password = await bcrypt.hash(args.password, saltRounds)

  const userObj = new User({
    name: args.name,
    email: args.email,
    role: 'user',
    password
  })
  const user = await userObj.save()
  console.log('user id => ', user._id)
  const token = await jwt.sign({
    id: user._id,
    role: 'user'
  }, salt)
  return {
    token,
    user
  }
}

async function login (parent, args, context, info) {
  const user = await User.findOne({ email: args.email })
  if (!user) {
    throw new Error('No such user')
  }
  const isPasswordCorrect = await bcrypt.compare(args.password, user.password)
  if (!isPasswordCorrect) {
    throw new Error('Password is incorrect')
  }

  const token = await jwt.sign({
    id: user._id,
    role: user.role
  }, salt)
  return {
    token,
    user
  }
}

async function update (parent, args, context, info) {
  const userId = await getUser(context)
  const user = await User.findById(userId)
  user.email = args.email ? args.email : user.email
  user.name = args.name ? args.name : user.name
  await user.save()
  return user
}

module.exports = {
  signup,
  login,
  update
}
