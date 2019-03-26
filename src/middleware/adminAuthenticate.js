const jwt = require('jsonwebtoken')
const APP_SECRET = 'skajndkjwand'

function getAdmin (context) {
  const Authorization = context.request.get('Authorization')
  console.log(Authorization)
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { id, role } = jwt.verify(token, APP_SECRET)
    if (role === 'admin') {
      return id
    } else {
      throw new Error('Admin access is needed')
    }
  }
  throw new Error('Not authenticated')
}

module.exports = {
  getAdmin
}
