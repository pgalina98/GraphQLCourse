import { gql } from "apollo-server-express";
import { ProductTypes, ProductResolvers } from "./product/index.js";
import { CategoryTypes, CategoryResolvers } from "./category/index.js";

export const typeDefs = gql`
  ${ProductTypes}
  ${CategoryTypes}
`;

export const resolvers = {
  Query: {
    ...ProductResolvers,
    ...CategoryResolvers,
  },
};
