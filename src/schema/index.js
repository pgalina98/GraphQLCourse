import { gql } from "apollo-server-express";
import { ProductTypes, ProductResolvers } from "./product/index.js";

export const typeDefs = gql`
  ${ProductTypes}
`;

export const resolvers = {
  Query: {
    ...ProductResolvers,
  },
};
