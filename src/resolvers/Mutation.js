var Bid = require('../models/bid')

var { getUser } = require('../middleware/userAuthenticate')
var { pubsub } = require('../Config/PubsubConfig')

function hello () {
  return 'Hello'
}

async function bidForProject (parent, args, context, info) {
  const userId = getUser(context)
  var bid = await Bid.findOne({
    forProject: args.for
  })
  console.log(bid)
  if (args.placedFor > bid.highest) {
    bid.highest = args.placedFor
    bid.by = userId
  } else {
    throw new Error('Bid is lower than current value')
  }

  var obj = await bid.save()
  pubsub.publish('BID_DONE', {bidDone: obj})
  return obj
}

module.exports = {
  hello,
  bidForProject
}
