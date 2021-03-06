export default /* GraphQL */ `
  type File {
    id: String!
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  input Upload {
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    singleUpload (file: Upload!): File!
    multipleUpload (files: [Upload!]!): [File!]!
  }
`
