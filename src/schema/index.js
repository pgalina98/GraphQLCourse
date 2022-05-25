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

export const typeDefs = gql`
  ${ProductTypes}
  ${CategoryTypes}
`;

export const resolvers = {
  Query: {
    ...ProductQuery,
    ...CategoryQuery,
  },
  Product: {
    ...ProductResolvers,
  },
  Category: {
    ...CategoryResolvers,
  },
};
