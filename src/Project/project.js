module.exports = {
  typeDef:

  `
  extend type Mutation {
      createProject(area: Int!, address: String!, budget: Int!): Project!
      getProject(id: ID!): Project
  }


  type Project {
      id: ID!
      area: Int!
      address: String!
      postedBy: User
      budget: Int!
      bidHistory: Bid
  }
  `

}
