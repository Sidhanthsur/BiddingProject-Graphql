var { PubSub } = require('graphql-subscriptions')

var { pubsub } = require('../Config/PubsubConfig')

function Bidsubscribe () {
  return pubsub.asyncIterator('BID_DONE')
}

const bidDone = {
  subscribe: Bidsubscribe
}

module.exports = {
  bidDone
}
