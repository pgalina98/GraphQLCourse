import { ApolloServer } from "apollo-server";

import { typeDefs, resolvers } from "./src/schema/index.js";
import database from "./src/data.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    database,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
