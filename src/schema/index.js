import { gql } from "apollo-server-express";
import {
  ProductTypes,
  ProductQuery,
  ProductResolvers,
} from "./product/index.js";
import {
  CategoryTypes,
  CategoryQuery,
  CategoryResolvers,
} from "./category/index.js";
import { ReviewTypes, ReviewQuery, ReviewResolvers } from "./review/index.js";

export const typeDefs = gql`
  ${ProductTypes}
  ${CategoryTypes}
  ${ReviewTypes}
`;

export const resolvers = {
  Query: {
    ...ProductQuery,
    ...CategoryQuery,
    ...ReviewQuery,
  },
  Product: {
    ...ProductResolvers,
  },
  Category: {
    ...CategoryResolvers,
  },
  Review: {
    ...ReviewResolvers,
  },
};
