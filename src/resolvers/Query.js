var Bid = require('../models/bid')

function info () {
  return 'Hello World'
}

async function getBidsForProject (root, args, context, info) {
  var bids = await Bid.find({
    forProject: args.for
  })
  console.log(bids)
  return bids
}

module.exports = {
  info,
  getBidsForProject
}
