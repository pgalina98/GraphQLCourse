import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

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
  CategorySubscription,
} from "./category/index.js";
import {
  ReviewType,
  ReviewQuery,
  ReviewMutation,
  ReviewResolver,
} from "./review/index.js";

const typeDefs = gql`
  ${ProductType}
  ${CategoryType}
  ${ReviewType}
`;

const resolvers = {
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
  Subscription: {
    ...CategorySubscription,
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

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
