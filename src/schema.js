module.exports =
{
  schema: `
    type Query {
        info: String!
        getBidsForProject(for: String!): [Bid!]!
    }
    
    type Mutation {
        hello: String
        bidForProject(for: ID!, placedFor: Int!): Bid
    }

    type Subscription {
        bidDone: Bid
    }

    type Bid {
        highest: Int!
        by: User
        forProject: Project
        id: ID!
    }
    `
}
