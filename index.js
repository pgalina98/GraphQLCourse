import * as dotenv from "dotenv";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PubSub } from "graphql-subscriptions";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";

import { schema } from "./src/schema/index.js";
import database from "./src/data.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
const httpServer = createServer(app);

const webSocketServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const serverCleanup = useServer(
  {
    schema,
    context: async () => {
      return { pubSub };
    },
  },
  webSocketServer
);

const pubSub = new PubSub();

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

await server.start();
app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      return { database, pubSub };
    },
  })
);

httpServer.listen(PORT, () => {
  console.log(`🚀 Query endpoint running at http://localhost:${PORT}/graphql`);
  console.log(
    `🚀 Subscription endpoint running at ws://localhost:${PORT}/graphql`
  );
});
