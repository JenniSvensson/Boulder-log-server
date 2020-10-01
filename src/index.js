import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
const app = express();

app.disable("x-powered-by");

const typeDefs = gql`
  type User {
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    name: "test",
    email: "test@test.com",
  },
  {
    name: "test1",
    email: "test1@test.com",
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
