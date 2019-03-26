const { GraphQLServer } = require('graphql-yoga')
var { Mutation, Query } = require('./resolvers/')
var {Mutation: UserMutation, Query: UserQuery} = require('./User/Resolvers')
var { Mutation: ProjectMutation, Query: ProjectQuery } = require('./Project/Resolvers')
const db = require('./Config/database')
var { merge } = require('lodash')
var { schema } = require('./schema.js')
var { typeDef: userSchema } = require('./User/user.js')
// const resolvers = {
//   Query,
//   Mutation
// }
// console.log(UserMutation)
// console.log(Query)
// console.log(Mutation)
// console.log(UserQuery)

const resolvers = merge(
  {},
  Query,
  UserQuery,
  ProjectQuery,
  Mutation,
  UserMutation,
  ProjectMutation
)
console.log(resolvers)
// console.log(['./src/schema.graphql', './src/User/user.graphql'])

const server = new GraphQLServer({
  typeDefs: [userSchema, schema],
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
