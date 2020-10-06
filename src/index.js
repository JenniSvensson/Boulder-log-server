import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
const PORT = 4000 || process.env;
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

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
