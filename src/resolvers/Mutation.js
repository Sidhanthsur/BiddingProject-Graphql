var Bid = require('../models/bid')

var { getUser } = require('../middleware/userAuthenticate')
var { pubsub } = require('../Config/PubsubConfig')

function hello () {
  return 'Hello'
}

async function bidForProject (parent, args, context, info) {
  const userId = getUser(context)
  var bid = await Bid.findOneAndUpdate({
    forProject: args.for,
    highest: {$lt: args.placedFor}
  }, {
    $set: {
      'highest': args.placedFor,
      'by': userId
    }
  }
  , {new: true})
  if (!bid) { throw new Error('Your bid must be higher than the current bid') }
  pubsub.publish('BID_DONE', {bidDone: bid})
  return bid
}

module.exports = {
  hello,
  bidForProject
}
