const { GraphQLServer } = require('graphql-yoga')
var Query = require('./resolvers/Query')
var Mutation = require('./resolvers/Mutation')
const db = require('./Config/database')

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request
    }
  }
})

server.start(() => {
  console.log('Server started')
})
