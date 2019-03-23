const jwt = require('jsonwebtoken')
const APP_SECRET = 'skajndkjwand'

function getUser (context) {
  const Authorization = context.request.get('Authorization')
  console.log(Authorization)
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { id } = jwt.verify(token, APP_SECRET)
    return id
  }
  throw new Error('Not authenticated')
}

module.exports = {
  getUser
}
