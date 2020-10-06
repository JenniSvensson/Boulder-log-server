export const resolvers = {
  Query: {
    hello: () => "hi",
  },
  Mutation: {
    addBoulder: (_, { grade }) => {
      console.log("this is working", grade);
    },
  },
};
