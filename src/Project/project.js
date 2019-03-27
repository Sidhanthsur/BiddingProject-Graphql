module.exports = {
  typeDef:

  `
  extend type Mutation {
      createProject(area: Int!, address: String!): Project!
  }


  type Project {
      id: ID!
      area: Int!
      address: String!
      postedBy: User
  }
  `

}
