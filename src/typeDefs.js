import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    user(id: ID!): User
    users: [User!]!
    boulders: [Boulder!]!
    boulder(id: ID!): Boulder
  }
  type Mutation {
    signUp(email: String!, name: String!, password: String!): User
    addBoulder(userId: ID, attempts: Int, grade: String, tags: String): Boulder
  }

  type User {
    id: ID!
    email: String!
    name: String!
    createdAt: String!
  }
  type Boulder {
    id: ID!
    userId: ID!
    attempts: Int!
    grade: String!
    tags: [Tag]
    createdAt: String!
  }

  type Tag {
    id: ID!
    title: String!
    createdAt: String!
  }
`;
