import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
const PORT = 4000 || process.env;
const app = express();

app.disable("x-powered-by");

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
