module.exports = {
  typeDef:

`
extend type Query {
    allUsers(limit: Int, skip: Int): [User!]!
}


extend type Mutation {
    signup(email: String!, name: String!, password: String!, role: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
    update(email: String, name: String): User
}

type AuthPayload {
    user: User,
    token: String
}

type User {
    id: ID!
    name: String
    email: String
    token: String
    role: String
}
`

}
