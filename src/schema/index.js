import { gql } from "apollo-server-express";
import {
  ProductType,
  ProductQuery,
  ProductMutation,
  ProductResolver,
} from "./product/index.js";
import {
  CategoryType,
  CategoryQuery,
  CategoryMutation,
  CategoryResolver,
} from "./category/index.js";
import {
  ReviewType,
  ReviewQuery,
  ReviewMutation,
  ReviewResolver,
} from "./review/index.js";

export const typeDefs = gql`
  ${ProductType}
  ${CategoryType}
  ${ReviewType}
`;

export const resolvers = {
  Query: {
    ...ProductQuery,
    ...CategoryQuery,
    ...ReviewQuery,
  },
  Mutation: {
    ...ProductMutation,
    ...CategoryMutation,
    ...ReviewMutation,
  },
  Product: {
    ...ProductResolver,
  },
  Category: {
    ...CategoryResolver,
  },
  Review: {
    ...ReviewResolver,
  },
};
